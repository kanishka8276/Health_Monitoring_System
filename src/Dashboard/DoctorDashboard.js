import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import PatientListItem from './PatientListItem';
import add from '../Asset/add.png';
import { useAuth } from "../Context/AuthContext";
import { doc, getDoc ,updateDoc} from "firebase/firestore";
import { db } from "../firebase"

function DoctorDashboard() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const { currentUser} = useAuth();
    const [patients,setPatients] = useState({});
    async function addInBackend(data) {
      console.log(currentUser);
      const docRef = doc(db, "myPatients",currentUser.uid);
      const docRef1 = doc(db, "myDoctors", email);
      const docRef2 = doc(db, "profile", currentUser.uid);
      try {
        const docSnap1 = await getDoc(docRef2);
        if(docSnap1.exists()) {
            await updateDoc(docRef1, {[currentUser.uid]:docSnap1.data()})
      .then(docRef1 => {
          console.log("A New Document Field has been added to an existing document");
      })
      .catch(error => {
          console.log(error);
      })
        } else {
            console.log("Document does not exist")
        }
    } catch(error) {
        console.log(error)
    }
      const Data={
      [email]:data
      };
     await updateDoc(docRef, Data)
      .then(docRef => {
          console.log("A New Document Field has been added to an existing document");
          getPatient();
          setShow(false);
      })
      .catch(error => {
          console.log(error);
      })
      
  }
   async function addPatient() {
      const docRef = doc(db, "profile", email);
    try {
      const docSnap =await getDoc(docRef);
      if(docSnap.exists()) {
          console.log(docSnap.data());
          addInBackend(docSnap.data())
      } else {
          console.log("Document does not exist")
      }
    
  } catch(error) {
      console.log(error)
  }}
  async function getPatient() {
    const docRef = doc(db, "myPatients", currentUser.uid);
  try {
    const docSnap =await getDoc(docRef);
    if(docSnap.exists()) {
        setPatients(docSnap.data());
    } else {
        console.log("Document does not exist")
    }
  
} catch(error) {
    console.log(error)
}}
useEffect(() => {
  getPatient();
},[]);
    return ( 
    <div className="container-fluid">
        <div className="row mt-5">
            <div className="col-12 col-lg-10">
            <h4 className="mb-3">Your Patients 
        <button className="btn purple-outline-btn float-end" onClick={() => setShow(true)}>
        <img src={add} alt="Add chapter" className="img" />
            {' '}
            Add Patient
        </button></h4>
        
        { Object.entries(patients).map(([key, value]) =>  <PatientListItem name={value.name} age={value.age} gender={value.gender}/>) }
        <Modal
          show={show}
          onHide={() => setShow(false)}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
            <Modal.Header className="bg-modal m-3" style={{ padding: '10px 15px 0px 15px' }}>
            Add Patient
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type="button" className="btn-close" onClick={() => setShow(false)} />
          </Modal.Header>
          <Modal.Body className="bg-modal">
            <input type="text" placeholder='Patient id'  className="form-control"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}/>
          </Modal.Body>
          <Modal.Footer>
          <button
              type="button"
              className="btn purple-btn"
              onClick={() => addPatient()}
            >
                Submit</button>  
        </Modal.Footer>
        </Modal>
        </div>
        </div>  
    </div>);
}
export default DoctorDashboard;