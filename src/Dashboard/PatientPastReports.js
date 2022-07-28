import React, { useState, useEffect } from 'react'
import ReportsList from './ReportsList';
import { collection, query, where ,getDocs} from "firebase/firestore";
import { db } from "../firebase"
import { useAuth } from "../Context/AuthContext";
import _ from 'lodash';

function  PatientPastReports() { 
    const { currentUser} = useAuth();
    const [pastReport,setPast] = useState()
    const Ref = collection(db, "reports");
    const q = query(Ref, where("user_id", "==", currentUser.uid));
  async function getPastReport() {
  try {
    const pr= await getDocs(q);
    setPast(pr);
    pastReport.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    
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
            {pastReport.forEach((doc) => {
              <ReportsList name={doc.data().date} id={doc.id}/>
              }) }
        </div>
        </div>  
    </div>);
}
export default  PatientPastReports;

