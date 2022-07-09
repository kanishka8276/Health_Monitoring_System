import React from 'react';
import nonotification from '../Asset/nonotification.png';

function Navbar() { 
    return (
    <>
    <div className="navbar fixed-top bg-white shadow d-none d-md-block">
        Home
        <div className="icons float-end">
        <img
                src={nonotification}
                alt="notifications"
                className="navbar-icons"
                style={{ height: '18px' }} 
              />
        </div>
    </div></>   
    );
}
export default Navbar;