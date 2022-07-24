import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import './Dashboard.css';

function PatientListItem() { 
    return (
    <div className="rowCard2">
          <div className="rowHeading col-7">
            Doctor name
          </div>
        <div className="row newrow" style={{marginTop:"-2%"}}> 
          <div className=" details2">
           Contact: 678777777
          </div>
          <div className=" details2">
           Specialization: Cardiologist
          </div>
          <div className=" details2">
           Address: Government hospital
          </div>
          
          </div>
    </div>);
}
export default PatientListItem;