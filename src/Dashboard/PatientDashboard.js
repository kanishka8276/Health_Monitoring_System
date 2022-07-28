import React, { useState, useEffect } from 'react';
import { useAuth } from "../Context/AuthContext";
import Caretaker from './Caretaker';
import DoctorItem from './DoctorItem';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase"

function PatientDashboard() { 
    const { currentUser,profile} = useAuth();
    const [doctors,setDoctors] = useState({});
    async function getDoctors() {
        const docRef = doc(db, "myDoctors", currentUser.uid);
      try {
        const docSnap =await getDoc(docRef);
        if(docSnap.exists()) {
            setDoctors(docSnap.data());
        } else {
            console.log("Document does not exist")
        }
      
    } catch(error) {
        console.log(error)
    }}
    useEffect(() => {
      getDoctors();
    },[]);
    return (
        <>
            <div className="container-fluid">
            <div className="row mt-5">
            <div className="row">
            <h3 className="purple">Welcome {profile.name}!</h3>
            <div className="col-4" >
            <h4 className="mb-3 mt-3">Your Doctors </h4>
            { Object.entries(doctors).map(([key, value]) =>  
            <DoctorItem name={value.name} specialization={value.specialization} phone={value.phone} address={value.address}/>) }
            </div>
            <div className="col-8" >
                <Caretaker />
            </div>    
            </div>
            <div className="uid">
            Your unique id is <span className='purple' >{currentUser.uid} </span><br/>
            Share this with your doctor.
            </div>
            </div>
            </div>
        </>
    );
}
export default PatientDashboard;