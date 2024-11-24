import React, { useState } from 'react';
import { LogOut, Settings, User } from 'lucide-react';

export const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-1.5 rounded-full hover:bg-gray-800 transition-colors"
      >
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 py-2 bg-gray-800 rounded-lg shadow-xl z-20 border border-gray-700">
            <div className="px-4 py-2 border-b border-gray-700">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-400">john@example.com</p>
            </div>
            
            <button className="w-full px-4 py-2 text-sm text-left hover:bg-gray-700 flex items-center gap-2">
              <User className="w-4 h-4" />
              Profile
            </button>
            <button className="w-full px-4 py-2 text-sm text-left hover:bg-gray-700 flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </button>
            <div className="border-t border-gray-700 mt-2 pt-2">
              <button className="w-full px-4 py-2 text-sm text-left text-red-400 hover:bg-gray-700 flex items-center gap-2">
                <LogOut className="w-4 h-4" />
                Sign out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};