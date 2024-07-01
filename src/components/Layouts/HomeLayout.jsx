import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../Nav/TopNav';
import Header2 from '../Header/Header2';


const HomeLayout = () => {
  return (
    <div className="service-layout">
      <main>
        <TopNav />
        <Header2 />
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
