import React from 'react';
import { Outlet } from 'react-router-dom'; // Correct import statement for Outlet
import CatchingHeader from './CatchingHeader';
import CatchingFooter from './CatchingFooter';

function CatchingLayout() {
  return (
    <div>
      <CatchingHeader />
      <main>
        <Outlet /> {/* Use Outlet as a self-closing component */}
      </main>
      <CatchingFooter />
    </div>
  );
}

export default CatchingLayout;
