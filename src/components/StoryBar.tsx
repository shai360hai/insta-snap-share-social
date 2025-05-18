
import React from 'react';
import Story from './Story';

const StoryBar: React.FC = () => {
  const stories = [
    { id: 1, username: 'your_story', imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=80&h=80', isActive: false },
    { id: 2, username: 'johndoe', imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=80&h=80', isActive: true },
    { id: 3, username: 'janedoe', imageUrl: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=80&h=80', isActive: true },
    { id: 4, username: 'mike_j', imageUrl: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=80&h=80', isActive: true },
    { id: 5, username: 'sarah.designs', imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=80&h=80', isActive: true },
    { id: 6, username: 'travel_addict', imageUrl: 'https://source.unsplash.com/random/80x80?portrait', isActive: true },
    { id: 7, username: 'foodie123', imageUrl: 'https://source.unsplash.com/random/80x80?food', isActive: true },
  ];

  return (
    <div className="flex overflow-x-auto space-x-4 py-4 px-4 md:px-0 scrollbar-none">
      {stories.map((story) => (
        <Story 
          key={story.id} 
          username={story.username} 
          imageUrl={story.imageUrl}
          isActive={story.isActive}
        />
      ))}
    </div>
  );
};

export default StoryBar;
