
import React from 'react';
import { Heart, MessageSquare } from 'lucide-react';

interface Post {
  id: number;
  imageUrl: string;
  likes: number;
  comments: number;
}

interface ProfilePostsProps {
  posts: Post[];
}

const ProfilePosts: React.FC<ProfilePostsProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-3 gap-1">
      {posts.map((post) => (
        <div key={post.id} className="relative aspect-square group">
          <img
            src={post.imageUrl}
            alt={`Post ${post.id}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center space-x-4 text-white">
              <div className="flex items-center">
                <Heart className="w-5 h-5 mr-1 fill-white" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-1" />
                <span>{post.comments}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfilePosts;
