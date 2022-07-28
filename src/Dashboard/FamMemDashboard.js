import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import PatientListItem from './PatientListItem';
import { useAuth } from "../Context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase"

function FamMemDashboard() { 
    const { currentUser} = useAuth();
    const [patients,setPatients] = useState({});
    console.log(currentUser.uid);
    async function getPatient() {
        const docRef = doc(db, "myFamMem", currentUser.uid);
      try {
        const docSnap =await getDoc(docRef);
        if(docSnap.exists()) {
            setPatients(docSnap.data());
            console.log(patients);
        } else {
            console.log("Document does not exist")
        }
      
    } catch(error) {
        console.log(error)
    }}
    useEffect(() => {
        getPatient();
      },[]);
    return (<>
        <div className="container-fluid">
        <div className="row mt-5">
            <div className="col-12 col-lg-10">
            <h5>Your Family Members</h5>
            { Object.entries(patients).map(([key, value]) =>  
            <PatientListItem name={value.name} age={value.age} gender={value.gender}/>) }
        </div>
        </div>  
    </div>
    </>);
}
export default FamMemDashboard;