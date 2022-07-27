import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import './Dashboard.css';
import blank from '../Asset/blankpic.png';

function DoctorListItem({name,address,phone,specialization}) { 
    return (
      <div className="col-11">
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
            {name}
          </div>
        <div className="newrow" style={{marginTop:"-2%"}}> 
         <strong>
           Contact: {phone}
           </strong>
           <div>
           <strong>
           Specialization: {specialization}
           </strong>
           </div>
          <div>
          <strong>
           Address: {address}
           </strong>
          </div>
          </div>
          </div>
          </div>
    </div>);
}
export default DoctorListItem;