
import React from 'react';
import Navbar from '@/components/Navbar';
import ProfileHeader from '@/components/ProfileHeader';
import ProfilePosts from '@/components/ProfilePosts';

const Profile = () => {
  const userProfile = {
    username: 'janedoe',
    fullName: 'Jane Doe',
    bio: 'Digital designer & photographer 📷\nLover of minimalism and coffee ☕',
    postsCount: 42,
    followers: 1254,
    following: 348,
    profilePic: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=150&h=150',
    isOwnProfile: true,
  };

  const posts = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=300',
      likes: 124,
      comments: 8,
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=300&h=300',
      likes: 89,
      comments: 12,
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=300&h=300',
      likes: 76,
      comments: 5,
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=300&h=300',
      likes: 215,
      comments: 24,
    },
    {
      id: 5,
      imageUrl: 'https://source.unsplash.com/random/300x300?portrait',
      likes: 98,
      comments: 7,
    },
    {
      id: 6,
      imageUrl: 'https://source.unsplash.com/random/300x300?coffee',
      likes: 132,
      comments: 15,
    },
    {
      id: 7,
      imageUrl: 'https://source.unsplash.com/random/300x300?design',
      likes: 45,
      comments: 3,
    },
    {
      id: 8,
      imageUrl: 'https://source.unsplash.com/random/300x300?minimal',
      likes: 67,
      comments: 9,
    },
    {
      id: 9,
      imageUrl: 'https://source.unsplash.com/random/300x300?architecture',
      likes: 112,
      comments: 18,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="md:pl-64 pb-16 md:pb-0">
        <div className="max-w-4xl mx-auto">
          <ProfileHeader {...userProfile} />
          <ProfilePosts posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
