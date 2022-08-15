import React from 'react';
import Navbar from './navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="container mx-auto max-w-2xl pt-8">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
