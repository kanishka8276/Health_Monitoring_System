import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import PatientListItem from './PatientListItem';
import add from '../Asset/add.png'

function DoctorDashboard() { 
    return ( 
    <div className="container-fluid">
        <div className="row mt-5">
            <div className="col-12 col-lg-10">
            <h4 className="mb-3">Your Patients 
        <button className="btn purple-outline-btn float-end">
        <img src={add} alt="Add chapter" className="img" />
            {' '}
            Add Patient
        </button></h4>
        <PatientListItem/>
        <PatientListItem/>
        </div>
        </div>  
    </div>);
}
export default DoctorDashboard;