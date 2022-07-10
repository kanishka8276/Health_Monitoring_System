import React from 'react';
import nonotification from '../Asset/nonotification.png'; 

function Navbar() { 
    return (
    <ul>
    <div className="navbar fixed-top bg-white shadow d-none d-md-block">
        <div className="navitems">
            <li>
                <a classname="navbar" href="/">Home</a>
            </li>
            <li>
                <p> Welcome to health buddy</p>
            </li>
            <li>
                <div className="icon">
                <img
                        src={nonotification}
                        alt="notifications"
                        className="navbar-icons"
                        style={{ height: '18px'}} 
                    />
                </div>
            </li>
        </div>
        
    </div></ul>   
    );
}
export default Navbar;