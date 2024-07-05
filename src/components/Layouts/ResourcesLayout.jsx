import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const ResourcesLayout = () => {

    return (
<div>

        <Outlet />

        <Footer/>
        </div>

    );

}

export default ResourcesLayout;