
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-fluidpe-light-teal p-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-8xl font-bold text-fluidpe-teal mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-fluidpe-teal mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="bg-fluidpe-teal hover:bg-fluidpe-medium-teal text-white">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
