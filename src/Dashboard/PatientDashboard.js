import React, { useState, useEffect } from 'react'
import { Route,Routes,Link} from 'react-router-dom';
import PatientPastReports from './PatientPastReports';
import PatientDocInfo from './PatientDocInfo';
import PatientGuardianInfo from './PatientGuardianInfo';
import DoctorItem from './DoctorItem';

function PatientDashboard() { 
    return (
        <>
            <div className="container-fluid">
            <div className="row mt-5">
            <div className="col-12 col-lg-10">
            <h5>Welcome User</h5>
            <DoctorItem/>
            </div>
            </div>  
            </div>
            <Routes>
                <Route path="/" element={<PatientDocInfo />} />
                <Route path="pastReports" element={<PatientPastReports />} />
                <Route path="doctor" element={<PatientDocInfo />} />
                <Route path="guardian" element={<PatientGuardianInfo />} />
            </Routes>
        </>
    );
}
export default PatientDashboard;