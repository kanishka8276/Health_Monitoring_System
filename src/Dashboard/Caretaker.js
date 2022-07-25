import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import CaretakerList from './CaretakerList';
import add from '../Asset/add.png';
import { getAuth, getUserByEmail } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase"


function Caretaker() { 
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
   
   async function addCareTaker() {
      const docRef = doc(db, "profile", email);
    try {
      const docSnap =await getDoc(docRef);
      if(docSnap.exists()) {
          console.log(docSnap.data());
      } else {
          console.log("Document does not exist")
      }
    
  } catch(error) {
      console.log(error)
  }}
    return ( 
    <div className="container-fluid">
        <div className="row mt-5">
            <div className="col-12 col-lg-10">
            <h4 className="mb-3">Your Caretakers 
        <button className="btn purple-outline-btn float-end" onClick={() => setShow(true)}>
        <img src={add} alt="Add chapter" className="img" />
            {' '}
            Add Caretaker
        </button></h4>
        
        <CaretakerList/>
        <CaretakerList/>
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