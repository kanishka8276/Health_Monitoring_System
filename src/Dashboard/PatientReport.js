import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import './Dashboard.css';
import { Modal } from 'react-bootstrap';
import add from '../Asset/add.png'

function PatientReport() { 
    const [show, setShow] = useState(false);
    const [comment, setComment] = useState('None');
    return (
        <div className="row">
        <div className="col-md-3" />
            <div className="text-center col-md-6">
            <h2 style={{ color: '#535461' }}>Health report</h2>
            <div className="shadow-sm p-3 round-boarder gb-white">
                <div className='report-span'>
                <div>
                    <p className="report">Date: 22/07/2022 </p>
                    <p className="report">Name: Kanishka </p>
                    <p className="report">Age:21 </p>
                    <p className="report">Gender : Female </p>
                    <p className="report">Height : 173 cm </p>
                    <p className="report">Weight : 55 kg </p>
                    <p className="report">Blood Groop : B+ </p>
                    <p className="report">BMI :18.4 </p>
                    <p className="report">BMI class : Underweight </p>
                </div>
                <div className='report-details'>
                    <p className="report">Systolic Blood Pressure : 147 mm</p>
                    <p className="report">Diastolic Blood Pressure : 90 mm</p>
                    <p className="report">BP class : High </p>
                    <p className="report">Cholestrol : 207 mg/dl </p>
                    <p className="report">Cholestrol Class : Above Normal</p>
                    <p className="report">Regular Exercise :Yes </p>
                    <p className="report">Smoking : No </p>
                    <p className="report">Drinking : Yes </p>
                    <p className="report">Cardiovascular Disease : Yes </p>
                </div>
                </div>
                
            </div>
            <p className="report">Comments : {comment} </p>
            <button className="btn purple-outline-btn" onClick={() => setShow(true)}>
            <img src={add} alt="Add Comment" className="img" />
            {' '}
            Add Comment
            </button>
            <Modal
          show={show}
          onHide={() => setShow(false)}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
            <Modal.Header className="bg-modal m-3" style={{ padding: '10px 15px 0px 15px' }}>
            Add Comment
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type="button" className="btn-close" onClick={() => setShow(false)} />
          </Modal.Header>
          <Modal.Body className="bg-modal">
            <input 
                type="text" 
                placeholder='Comment'  
                className="form-control"
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                 />
          </Modal.Body>
          <Modal.Footer>
          <button
              type="button"
              className="btn purple-btn"
              onClick={() => setShow(false)}
            >
                Submit</button>  
        </Modal.Footer>
        </Modal>
        </div>
        </div>

    );
}
export default PatientReport;

