import React from 'react';
import { Outlet } from 'react-router-dom'; // Correct import statement for Outlet
import ResourcesHeader from './ResourcesHeader';
import ResourcesFooter from './ResourcesFooter';

function ResourcesLayout() {
  return (
    <div>
      <ResourcesHeader />
      
      <main>
        <Outlet /> {/* Use Outlet as a self-closing component */}
      </main>
      <ResourcesFooter />
    </div>
  );
}

export default ResourcesLayout;
