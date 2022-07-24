import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import CaretakerList from './CaretakerList';
import add from '../Asset/add.png'

function Caretaker() { 
    const [show, setShow] = useState(false);
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
            <input type="text" placeholder='Caretaker id'  className="form-control"/>
          </Modal.Body>
          <Modal.Footer>
        </Modal.Footer>
        </Modal>
        </div>
        </div>  
    </div>);
}
export default Caretaker;