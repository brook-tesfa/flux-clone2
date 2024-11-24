import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';
import { AuthButton } from './AuthButton';

const PublicNavbar = () => {
  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold">Flux AI</span>
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-purple-400 transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium hover:text-purple-400 transition-colors">Pricing</a>
            <AuthButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;