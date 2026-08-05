import React from 'react';
import Navbar from './navbar';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="site-shell">
    <div className="ambient ambient-one" />
    <div className="ambient ambient-two" />
    <Navbar />
    <main>{children}</main>
    <footer className="site-footer">
      <span>Devin Minnihan · New York</span>
      <span>Designing in code, 2026</span>
    </footer>
  </div>
);

export default Layout;
