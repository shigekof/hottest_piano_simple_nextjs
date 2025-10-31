import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen bg-white ${className}`}>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 Hottest Piano. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Beautiful piano music for everyone 🎹
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;