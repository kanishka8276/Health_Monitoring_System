import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import './Dashboard.css';

function PatientListItem() { 
    return (
    <div className="rowCard">
          <div className="rowHeading col-7">
            Caretaker name
          </div>
        <div className="row" style={{marginTop:"-2%"}}> 
          <div className="col-3 details">
           Contact: 678777777
          </div>
          <div className="col-9">
                <button
                  type="button"
                  className="btn purple-btn float-end"
                  style={{marginTop:"-2%"}}
                >
                  Delete
                </button>
            </div>
          </div>
    </div>);
}
export default PatientListItem;