import React, { useState, useEffect } from 'react'
import ReportsList from './ReportsList';
import { collection, query, where ,getDocs} from "firebase/firestore";
import { db } from "../firebase"
import { useAuth } from "../Context/AuthContext";
import _ from 'lodash';
import { useParams } from "react-router-dom";

function  PatientPastReports() { 
    const { id } = useParams();
    const [pastReport,setPast] = useState([])
    const Ref = collection(db, "reports");
    const q = query(Ref, where("user_id", "==", id));
    let itemArray = {};
    async function getPastReport() {
  try {
    const pr= await getDocs(q);
    console.log('#');
    pr.forEach((doc) => {
      itemArray={...itemArray};
    });
    setPast(itemArray);
    console.log(pastReport);
    
} catch(error) {
    console.log(error)
}}
useEffect(() => {
  getPastReport();
},[]);
console.log(q);
    return ( 
        <div className="container-fluid">
        <div className="row mt-5">
            <div className="col-12 col-lg-10">
            <h4 className="mb-3">Your Reports </h4>
              <ReportsList name='July 29, 2022 at 9:34:14 AM UTC+5:30' id='bPSfFJ1UYxQZBs5x55LpzzT3L9Z220220729040414'/>
              <ReportsList name='July 29, 2022 at 9:30:05 AM UTC+5:30' id='bPSfFJ1UYxQZBs5x55LpzzT3L9Z220220729040705'/>
        </div>
        </div>  
    </div>);
}
export default  PatientPastReports;

