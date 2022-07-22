import React from 'react';
import { Route,Routes,Link} from 'react-router-dom';
import Disease1 from './Disease1';
import Disease2 from './Disease2';


function AuthContainer() {
    return (
    <div className="container-fluid">
        <div className="row">
        <div className="col-md-3"></div>
        <div className="mt-5 col-md-6">
            <ul className="nav nav-fill">
                <li class="nav-item">
                    <Link to="">Cardiovascular Disease</Link>
                </li>
                <li class="nav-item">
                    <Link to="d2">Cholestrol and Sugar</Link>
                </li>
                
            </ul>
            </div>
            <Routes>
                <Route path="/" element={<Disease1/>} />
                <Route path="/d2" element={<Disease2/>} />
            </Routes>
            </div>
    </div>);
}

export default AuthContainer;
