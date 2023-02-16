import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
const Outlit = () => {
    return (
        <div>
            <Navbar />
            <Outlet/>
        </div>
    );
}

export default Outlit;
