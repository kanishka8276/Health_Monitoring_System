import React, { useState, useEffect } from 'react'
import ReportsList from './ReportsList';
import { collection, query, where ,getDocs} from "firebase/firestore";
import { db } from "../firebase"
import { useAuth } from "../Context/AuthContext";

function  PatientPastReports() { 
    const { currentUser} = useAuth();
    const Ref = collection(db, "reports");
    const q = query(Ref, where("user_id", "==", currentUser.uid));
    
  async function getPastReport() {
  try {
    const pr= await getDocs(q);
  console.log(pr);
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
            <ReportsList name="22-07-2022 12:00 PM"/>
            <ReportsList name="20-07-2022 6:00 PM"/>
        </div>
        </div>  
    </div>);
}
export default  PatientPastReports;

