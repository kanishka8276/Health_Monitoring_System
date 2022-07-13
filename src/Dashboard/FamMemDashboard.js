import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import PatientListItem from './PatientListItem';

function FamMemDashboard() { 
    return (<>
        <div className="container-fluid">
        <div className="row mt-5">
            <div className="col-12 col-lg-10">
            <h5>Your Family Members</h5>
        <PatientListItem/>
        <PatientListItem/>
        </div>
        </div>  
    </div>
    </>);
}
export default FamMemDashboard;