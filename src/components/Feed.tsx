
import React from 'react';
import Post from './Post';
import StoryBar from './StoryBar';

const Feed = () => {
  const posts = [
    {
      id: 1,
      username: 'johndoe',
      userImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=80&h=80',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600',
      caption: 'Working on a new project! #coding #webdev',
      likes: 124,
      timestamp: '2 hours ago',
      comments: [
        { username: 'sarah.designs', text: 'Looks amazing!' },
        { username: 'mike_j', text: 'Great work!' },
      ],
    },
    {
      id: 2,
      username: 'janedoe',
      userImage: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=80&h=80',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600',
      caption: 'My cozy workspace 🏡',
      likes: 89,
      timestamp: '5 hours ago',
      comments: [
        { username: 'johndoe', text: 'Such a nice setup!' },
        { username: 'sarah.designs', text: 'I love the lighting!' },
        { username: 'travel_addict', text: 'Very inspiring space!' },
      ],
    },
    {
      id: 3,
      username: 'sarah.designs',
      userImage: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=80&h=80',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600',
      caption: 'My cat is judging me again 😂 #catsofinstagram',
      likes: 215,
      timestamp: '1 day ago',
      comments: [
        { username: 'janedoe', text: 'So cute!' },
        { username: 'mike_j', text: 'Adorable!' },
      ],
    },
  ];

  return (
    <div className="max-w-lg mx-auto">
      <StoryBar />
      <div className="px-4 md:px-0">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
