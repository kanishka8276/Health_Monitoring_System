import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import './Dashboard.css';

function PatientListItem({name,contact}) { 
    return (
    <div className="rowCard">
          <div className="rowHeading col-12">
          {name}
          </div>
        <div className="row" style={{marginTop:"-2%"}}> 
          <div className="col-5 details">
           Contact: {contact}
          </div>          
          </div>
    </div>);
}
export default PatientListItem;