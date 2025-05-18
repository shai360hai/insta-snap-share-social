
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Search, Heart, User, PlusSquare } from 'lucide-react';

const Navbar = () => {
  const isMobile = window.innerWidth <= 768;
  
  return (
    <>
      {/* Desktop navbar */}
      <div className="hidden md:flex fixed left-0 h-screen w-16 md:w-64 border-r border-gray-200 flex-col py-8 px-2 md:px-4">
        <div className="mb-10 flex justify-center md:justify-start">
          <Link to="/" className="text-xl font-bold md:px-4">
            {isMobile ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                <path d="M12 6.87a5.13 5.13 0 1 0 0 10.26 5.13 5.13 0 0 0 0-10.26zm0 8.468a3.339 3.339 0 1 1 0-6.677 3.339 3.339 0 0 1 0 6.677zm6.538-8.469a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
              </svg>
            ) : (
              <span className="font-semibold text-xl tracking-tight">Instagram</span>
            )}
          </Link>
        </div>
        <nav className="flex-1 flex flex-col gap-2">
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Home className="h-5 w-5" />
              <span className="hidden md:inline">Home</span>
            </Button>
          </Link>
          <Link to="/search">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Search className="h-5 w-5" />
              <span className="hidden md:inline">Search</span>
            </Button>
          </Link>
          <Link to="/explore">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="hidden md:inline">Explore</span>
            </Button>
          </Link>
          <Link to="/messages">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
              <span className="hidden md:inline">Messages</span>
            </Button>
          </Link>
          <Link to="/notifications">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Heart className="h-5 w-5" />
              <span className="hidden md:inline">Notifications</span>
            </Button>
          </Link>
          <Link to="/create">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <PlusSquare className="h-5 w-5" />
              <span className="hidden md:inline">Create</span>
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <User className="h-5 w-5" />
              <span className="hidden md:inline">Profile</span>
            </Button>
          </Link>
        </nav>
      </div>

      {/* Mobile bottom navbar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-3 px-2 z-10">
        <Link to="/">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Home className="h-6 w-6" />
          </Button>
        </Link>
        <Link to="/search">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-6 w-6" />
          </Button>
        </Link>
        <Link to="/create">
          <Button variant="ghost" size="icon" className="rounded-full">
            <PlusSquare className="h-6 w-6" />
          </Button>
        </Link>
        <Link to="/notifications">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Heart className="h-6 w-6" />
          </Button>
        </Link>
        <Link to="/profile">
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-6 w-6" />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
