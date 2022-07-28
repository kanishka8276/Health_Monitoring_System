import React, { useState, useEffect } from 'react'
import Caretaker from './Caretaker';
import DoctorItem from './DoctorItem';

function PatientDashboard() { 
    return (
        <>
            <div className="container-fluid">
            <div className="row mt-5">
            <div className="row">
            <h3 className="purple">Welcome Kanishka!</h3>
            <div className="col-4" >
            <h4 className="mb-3 mt-3">Your Doctors </h4>
            <DoctorItem name="Trilok Srivastava" specialization="Physician" phone="9876543210" address="Russel chowk"/>
            <DoctorItem name="Sanjay Batra" specialization="Cardiologist" phone="9776543211" address="Sadar Bazaar"/>
            </div>
            <div className="col-8" >
                <Caretaker />
            </div>    
            </div>
            </div>
            </div>
        </>
    );
}
export default PatientDashboard;