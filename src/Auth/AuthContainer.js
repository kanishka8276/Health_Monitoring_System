import React from 'react';
import { Route,Routes,Link} from 'react-router-dom';
import RegisterDoctor from './RegisterDoctor';
import RegisterFamMem from './RegisterFamMem';
import RegisterPatient from './RegisterPatient';


function AuthContainer() {
    return (
    <div className="container-fluid">
        <div className="row">
        <div className="col-md-3"></div>
        <div className="mt-5 col-md-6">
            <ul className="nav nav-fill">
                <li class="nav-item">
                    <Link to="">Patient</Link>
                </li>
                <li class="nav-item">
                    <Link to="famMem">Family Member</Link>
                </li>
                <li class="nav-item">
                    <Link to="doctor">Doctor</Link>
                </li>
            </ul>
            </div>
            <Routes>
                <Route path="/" element={<RegisterPatient/>} />
                <Route path="doctor" element={<RegisterDoctor/>} />
                <Route path="famMem" element={<RegisterFamMem/>} />
            </Routes>
            </div>
    </div>);
}

export default AuthContainer;
