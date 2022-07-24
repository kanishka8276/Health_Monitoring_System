import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import './Dashboard.css';

function PatientReport() { 
    return (
        <div className="row">
        <div className="col-md-3" />
            <div className="text-center col-md-6">
            <h2 style={{ color: '#535461' }}>Health report</h2>
            <div className="shadow-sm p-3 round-boarder gb-white">
                <div className='report-span'>
                <div>
                    <p className="report">Date: 22/5/2022 </p>
                    <p className="report">Name: Kailash Pandey </p>
                    <p className="report">Age:46 </p>
                    <p className="report">Gender : Male </p>
                    <p className="report">Height : 168 cm </p>
                    <p className="report">Weight : 78 kg </p>
                    <p className="report">Blood Groop : O+ </p>
                    <p className="report">BMI :25.6 </p>
                    <p className="report">BMI class : Obesity </p>
                </div>
                <div className='report-details'>
                    <p className="report">Systolic Blood Pressure : 147 mm</p>
                    <p className="report">Diastolic Blood Pressure : 90 mm</p>
                    <p className="report">BP class : High </p>
                    <p className="report">Cholestrol : 207 mg/dl </p>
                    <p className="report">Cholestrol Class : Above Normal</p>
                    <p className="report">Regular Exercise :Yes </p>
                    <p className="report">Smoking : No </p>
                    <p className="report">Drinking : Yes </p>
                    <p className="report">Cardiovascular Disease : Yes </p>
                    <p className="report">Any comments : None </p>
                </div>
                </div>
                
            </div>

        </div>
        </div>

    );
}
export default PatientReport;

