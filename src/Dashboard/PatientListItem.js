import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import './Dashboard.css';

function PatientListItem() { 
    return (
    <div className="rowCard">
          <div className="rowHeading col-12">
            Patient name
          </div>
        <div className="row" style={{marginTop:"-2%"}}> 
          <div className="col-3 details">
           Age: 20 years
          </div>
          <div className="col-3 details">
           Gender: Male
          </div>
          <div className="col-6">
                <button
                  type="button"
                  className="btn purple-btn float-end"
                  style={{marginTop:"-2%"}}
                >
                  View Reports
                </button>
            </div>
          </div>
    </div>);
}
export default PatientListItem;