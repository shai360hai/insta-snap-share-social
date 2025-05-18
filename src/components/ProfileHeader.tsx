
import React, { useState } from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Settings, Grid, Bookmark, TagIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProfileHeaderProps {
  username: string;
  fullName: string;
  bio: string;
  postsCount: number;
  followers: number;
  following: number;
  profilePic: string;
  isOwnProfile: boolean;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  username,
  fullName,
  bio,
  postsCount,
  followers,
  following,
  profilePic,
  isOwnProfile,
}) => {
  const { toast } = useToast();
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
    toast({
      title: isFollowing ? 'Unfollowed' : 'Followed',
      description: isFollowing ? `You unfollowed ${username}` : `You are now following ${username}`,
    });
  };

  return (
    <div className="pb-4">
      {/* Profile header */}
      <div className="flex flex-col md:flex-row md:items-start p-4 space-y-4 md:space-y-0">
        <div className="flex justify-center md:justify-start md:w-1/3">
          <Avatar className="w-20 h-20 md:w-32 md:h-32">
            <img 
              src={profilePic} 
              alt={username} 
              className="rounded-full object-cover"
            />
          </Avatar>
        </div>
        <div className="md:w-2/3 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0">
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <h1 className="text-xl md:text-2xl font-light">{username}</h1>
              {isOwnProfile ? (
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Edit Profile
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Settings className="h-5 w-5" />
                  </Button>
                </div>
              ) : (
                <div className="flex space-x-2">
                  <Button onClick={handleFollowToggle} variant={isFollowing ? "outline" : "default"} size="sm">
                    {isFollowing ? 'Following' : 'Follow'}
                  </Button>
                  <Button variant="outline" size="sm">
                    Message
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-around md:justify-start md:space-x-10">
            <div className="text-center md:text-left">
              <span className="font-semibold">{postsCount}</span> posts
            </div>
            <div className="text-center md:text-left">
              <span className="font-semibold">{followers}</span> followers
            </div>
            <div className="text-center md:text-left">
              <span className="font-semibold">{following}</span> following
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="font-semibold">{fullName}</div>
            <p className="whitespace-pre-line">{bio}</p>
          </div>
        </div>
      </div>

      {/* Profile tabs */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="w-full grid grid-cols-3">
          <TabsTrigger value="posts" className="flex items-center gap-2">
            <Grid className="h-4 w-4" />
            <span className="hidden sm:inline">Posts</span>
          </TabsTrigger>
          <TabsTrigger value="saved" className="flex items-center gap-2">
            <Bookmark className="h-4 w-4" />
            <span className="hidden sm:inline">Saved</span>
          </TabsTrigger>
          <TabsTrigger value="tagged" className="flex items-center gap-2">
            <TagIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Tagged</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default ProfileHeader;
