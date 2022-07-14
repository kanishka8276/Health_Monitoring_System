import React, { useState, useEffect } from 'react'
import { Route,Routes,Link} from 'react-router-dom';
import PatientPastReports from './PatientPastReports';
import PatientDocInfo from './PatientDocInfo';
import PatientGuardianInfo from './PatientGuardianInfo';

function PatientDashboard() { 
    return (
        <>
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