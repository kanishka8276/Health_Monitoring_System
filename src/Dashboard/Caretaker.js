import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import CaretakerList from './CaretakerList';
import add from '../Asset/add.png';
import { useAuth } from "../Context/AuthContext";
import { doc, getDoc ,updateDoc} from "firebase/firestore";
import { db } from "../firebase"


function Caretaker() { 
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const { currentUser} = useAuth();
    const [caretakers,setCareTakers] = useState({});
    console.log(caretakers);
    async function addInBackend(data) {
      console.log(currentUser);
      const docRef = doc(db, "careTaker",currentUser.uid);
      const docRef1 = doc(db, "myFamMem", email);
      try {
        const docRef = doc(db, "profile", email);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
            await updateDoc(docRef1, {[currentUser.uid]:docSnap.data()})
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
          getCareTaker();
          setShow(false);
      })
      .catch(error => {
          console.log(error);
      })
      
  }
   async function addCareTaker() {
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
  async function getCareTaker() {
    const docRef = doc(db, "careTaker", currentUser.uid);
  try {
    const docSnap =await getDoc(docRef);
    if(docSnap.exists()) {
        setCareTakers(docSnap.data());
    } else {
        console.log("Document does not exist")
    }
  
} catch(error) {
    console.log(error)
}}
useEffect(() => {
  getCareTaker();
},[]);
    return ( 
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
            <h4 className="mb-3">Your Caretakers 
        <button className="btn purple-outline-btn float-end" onClick={() => setShow(true)}>
        <img src={add} alt="Add chapter" className="img" />
            {' '}
            Add Caretaker
        </button></h4>
       { Object.entries(caretakers).map(([key, value]) =>  <CaretakerList name={value.name} contact={value.phone}/>) }
        <Modal
          show={show}
          onHide={() => setShow(false)}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
            <Modal.Header className="bg-modal m-3" style={{ padding: '10px 15px 0px 15px' }}>
            Add Caretaker
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type="button" className="btn-close" onClick={() => setShow(false)} />
          </Modal.Header>
          <Modal.Body className="bg-modal">
            <input type="text" placeholder='Caretaker id'  className="form-control"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}/>
          </Modal.Body>
          <Modal.Footer>
          <button
              type="button"
              className="btn purple-btn"
              onClick={() =>addCareTaker()}
            >
                Submit</button>  
        </Modal.Footer>
        </Modal>
        </div>
        </div>  
    </div>);
}
export default Caretaker;