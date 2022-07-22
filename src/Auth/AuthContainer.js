import React from 'react';
import { Route,Routes} from 'react-router-dom';
import RegisterDoctor from './RegisterDoctor';
import RegisterFamMem from './RegisterFamMem';
import RegisterPatient from './RegisterPatient';


function AuthContainer() {
    return (
    <div className="container-fluid">
        <div className="row">
        <div className="col-md-3"></div>
        <div className="mt-5 col-md-6">
            </div>
            <Routes>
                <Route path="patient" element={<RegisterPatient/>} />
                <Route path="doctor" element={<RegisterDoctor/>} />
                <Route path="famMem" element={<RegisterFamMem/>} />
            </Routes>
            </div>
    </div>);
}

export default AuthContainer;
