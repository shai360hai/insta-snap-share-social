
import React, { useState } from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, MessageSquare, Share2, Bookmark } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PostProps {
  id: number;
  username: string;
  userImage: string;
  image: string;
  caption: string;
  likes: number;
  timestamp: string;
  comments: { username: string; text: string }[];
}

const Post: React.FC<PostProps> = ({
  id,
  username,
  userImage,
  image,
  caption,
  likes: initialLikes,
  timestamp,
  comments: initialComments,
}) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [comments, setComments] = useState(initialComments);
  const [commentText, setCommentText] = useState('');
  const [showAllComments, setShowAllComments] = useState(false);
  const { toast } = useToast();

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      const newComment = { username: 'user123', text: commentText };
      setComments([...comments, newComment]);
      setCommentText('');
      
      toast({
        title: "Comment added",
        description: "Your comment has been posted",
      });
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-md mb-6">
      {/* Post header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <Avatar className="w-8 h-8">
            <img
              src={userImage}
              alt={username}
              className="rounded-full object-cover"
            />
          </Avatar>
          <span className="font-semibold">{username}</span>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
          </svg>
        </Button>
      </div>

      {/* Post image */}
      <div className="relative">
        <img
          src={image}
          alt="Post"
          className="w-full object-cover max-h-[500px]"
          onDoubleClick={handleLike}
        />
      </div>

      {/* Post actions */}
      <div className="p-3">
        <div className="flex justify-between mb-2">
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLike}
              className={`h-9 w-9 ${liked ? 'text-red-500' : ''}`}
            >
              <Heart
                className={`w-6 h-6 ${liked ? 'fill-red-500' : ''}`}
              />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <MessageSquare className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Share2 className="w-6 h-6" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Bookmark className="w-6 h-6" />
          </Button>
        </div>

        {/* Likes */}
        <div className="font-semibold mb-1">{likes} likes</div>

        {/* Caption */}
        <div className="mb-2">
          <span className="font-semibold mr-2">{username}</span>
          <span>{caption}</span>
        </div>

        {/* Comments */}
        {comments.length > 0 && (
          <>
            {!showAllComments && comments.length > 2 ? (
              <button
                className="text-gray-500 text-sm mb-1"
                onClick={() => setShowAllComments(true)}
              >
                View all {comments.length} comments
              </button>
            ) : null}

            <div className="space-y-1 mb-2">
              {(showAllComments ? comments : comments.slice(0, 2)).map(
                (comment, index) => (
                  <div key={index}>
                    <span className="font-semibold mr-2">{comment.username}</span>
                    <span>{comment.text}</span>
                  </div>
                )
              )}
            </div>
          </>
        )}

        {/* Timestamp */}
        <div className="text-xs text-gray-500 uppercase mb-3">{timestamp}</div>

        {/* Add comment */}
        <form onSubmit={handleComment} className="flex items-center mt-2 border-t border-gray-100 pt-3">
          <Input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="flex-1 border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
          />
          {commentText.trim() && (
            <Button
              type="submit"
              variant="ghost"
              size="sm"
              className="text-blue-500 font-semibold"
            >
              Post
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Post;
