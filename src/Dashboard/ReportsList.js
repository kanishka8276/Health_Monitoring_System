import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import './Dashboard.css';
import dateFormat from 'dateformat';

function ReportsList({name,id}) { 
    return (
    <div className="rowCard1">
          <div className="rowHeading col-12">
          { dateFormat(Date(name), 'mmmm dd, yyyy hh:MM tt') }
            <div className="col-11">
                <Link to={`/report${id}`}>
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