import React from 'react';
import { Outlet } from 'react-router-dom';


const ArticleLayout = () => {
  return (
    <div className="article-layout">
      <main>
        
        <Outlet />
      </main>
    </div>
  );
};

export default ArticleLayout;
