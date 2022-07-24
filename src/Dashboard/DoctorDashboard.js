import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import PatientListItem from './PatientListItem';
import add from '../Asset/add.png'

function DoctorDashboard() { 
    const [show, setShow] = useState(false);
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
        <PatientListItem/>
        <PatientListItem/>
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
            <input type="text" placeholder='Patient id'  className="form-control"/>
          </Modal.Body>
          <Modal.Footer>
          <button
              type="button"
              className="btn purple-btn"
            >
                Submit</button>  
        </Modal.Footer>
        </Modal>
        </div>
        </div>  
    </div>);
}
export default DoctorDashboard;