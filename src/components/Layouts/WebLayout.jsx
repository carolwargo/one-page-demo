import React from 'react';
import { Outlet } from 'react-router-dom';
import WebHeader from '../Header/WebHeader';
import WebBar from '../Web/WebBar';


const HomeLayout = () => {
  return (
    <div className="service-layout">
      <main>
        <WebHeader />
        <WebBar />
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
