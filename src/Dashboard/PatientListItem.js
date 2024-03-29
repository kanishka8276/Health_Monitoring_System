import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import './Dashboard.css';

function PatientListItem({name,age,gender,id}) { 
    return (
    <div className="rowCard">
          <div className="rowHeading col-12">
           {name}
          </div>
        <div className="row" style={{marginTop:"-2%"}}> 
          <div className="col-3 details">
           Age: {age}
          </div>
          <div className="col-3 details">
           Gender:{gender}
          </div>
          <div className="col-6">
            
          <Link to={`/pastReports/${id}`}  >
           
                <button
                  type="button"
                  className="btn purple-btn float-end"
                  style={{marginTop:"-2%"}}
                >
                  View Reports
                </button>
                </Link>
            </div>
          </div>
    </div>);
}
export default PatientListItem;