import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import PatientListItem from './PatientListItem';

function FamMemDashboard() { 
    return (<>
        <div className="container-fluid">
        <div className="row mt-5">
            <div className="col-12 col-lg-10">
            <h5>Your Family Members</h5>
        <PatientListItem name="Animesh" age="55" gender="male"/>
        <PatientListItem name="Anjali" age="80" gender="Female"/>
        </div>
        </div>  
    </div>
    </>);
}
export default FamMemDashboard;