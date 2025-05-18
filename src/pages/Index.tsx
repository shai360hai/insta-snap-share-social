
import React from 'react';
import Navbar from '@/components/Navbar';
import Feed from '@/components/Feed';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="md:pl-64 pt-4 pb-16 md:py-8">
        <Feed />
      </div>
    </div>
  );
};

export default Index;
