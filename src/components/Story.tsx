
import React from 'react';

interface StoryProps {
  username: string;
  imageUrl: string;
  isActive?: boolean;
}

const Story: React.FC<StoryProps> = ({ username, imageUrl, isActive = false }) => {
  return (
    <div className="flex flex-col items-center space-y-1">
      <div className={`${isActive ? 'bg-gradient-to-tr from-instagram-yellow via-instagram-orange to-instagram-pink' : 'bg-gray-200'} p-[2px] rounded-full`}>
        <div className="bg-white p-[2px] rounded-full">
          <img 
            src={imageUrl} 
            alt={`${username}'s story`} 
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
      </div>
      <span className="text-xs truncate max-w-[70px]">{username}</span>
    </div>
  );
};

export default Story;
