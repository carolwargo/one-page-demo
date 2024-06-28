import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../Nav/TopNav';


const Layout = () => {
  return (
    <div className="service-layout">
      <main>
        <TopNav />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
