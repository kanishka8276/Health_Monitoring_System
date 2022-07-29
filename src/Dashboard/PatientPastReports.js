import React, { useState, useEffect } from 'react'
import ReportsList from './ReportsList';
import { collection, query, where ,getDocs} from "firebase/firestore";
import { db } from "../firebase"
import { useAuth } from "../Context/AuthContext";
import _ from 'lodash';
import { useParams } from "react-router-dom";

function  PatientPastReports() { 
    const { currentUser} = useAuth();
    const { id } = useParams();
    const [pastReport,setPast] = useState([])
    const Ref = collection(db, "reports");
    const q = query(Ref, where("user_id", "==", id));
    let itemArray = [];
  async function getPastReport() {
  try {
    const pr= await getDocs(q);
    pr.forEach((doc) => {
      itemArray = [...itemArray, doc.data()];
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
            {
              <ReportsList name={_.get(pastReport,'[0].date',Date())} id={pastReport[0].user_id}/>
               }
        </div>
        </div>  
    </div>);
}
export default  PatientPastReports;

