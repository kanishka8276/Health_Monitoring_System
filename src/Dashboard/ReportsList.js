import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import './Dashboard.css';

function ReportsList() { 
    return (
    <div className="rowCard1">
          <div className="rowHeading col-12">
            Report-1
            <div className="col-11">
                <Link to="/report">
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
export default ReportsList;