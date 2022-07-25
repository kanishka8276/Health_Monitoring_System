import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import './Dashboard.css';
import blank from '../Asset/blankpic.png';

function PatientListItem() { 
    return (
      <div className="col-6">
      <div className="doctor-card">
         <div className="image-container">
        <img
          src={blank}
          alt="doctor"
          style={{ marginBottom: '0px' }}
        />
        </div>
        <div className="info mx-1">
          <div className="rowHeading col-7">
            Doctor name
          </div>
        <div className="newrow" style={{marginTop:"-2%"}}> 
         <strong>
           Contact: 678777777
           </strong>
           <div>
           <strong>
           Specialization: Cardiologist
           </strong>
           </div>
          <div>
          <strong>
           Address: Government hospital
           </strong>
          </div>
          </div>
          </div>
          </div>
    </div>);
}
export default PatientListItem;