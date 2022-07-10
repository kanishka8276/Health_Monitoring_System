import React from 'react';
import { Route,Routes,Link} from 'react-router-dom';
import RegisterDoctor from './RegisterDoctor';
import RegisterFamMem from './RegisterFamMem';
import RegisterPatient from './RegisterPatient';


function AuthContainer() {
    return (
    <div className="container-fluid">
        <div className="mt-5">
            <div className="row">
                <div className="col">
                    <Link to="">Patient</Link>
                </div>
                <div className="col">
                    <Link to="famMem">Family Member</Link>
                </div>
                <div className="col">
                    <Link to="doctor">Doctor</Link>
                </div>
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
