import React, { useState, useEffect } from 'react'
import ReportsList from './ReportsList';

function  PatientPastReports() { 
    return ( 
        <div className="container-fluid">
        <div className="row mt-5">
            <div className="col-12 col-lg-10">
            <h4 className="mb-3">Your Reports </h4>
            <ReportsList/>
            <ReportsList/>
        </div>
        </div>  
    </div>);
}
export default  PatientPastReports;

