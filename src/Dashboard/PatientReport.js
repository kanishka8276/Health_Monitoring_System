import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import './Dashboard.css';
import { Modal } from 'react-bootstrap';
import add from '../Asset/add.png'
import { useAuth } from "../Context/AuthContext";
import { doc, getDoc} from "firebase/firestore";
import { db } from "../firebase"

function PatientReport({ match }) { 
    const [show, setShow] = useState(false);
    const [comment, setComment] = useState('None');
    const [report,setReport] = useState({});
    const {profile} = useAuth();
    const { id } = match.params;
    async function getReport(e) {
        const docRef = doc(db, "reports", id);
      try {
        const docSnap =await getDoc(docRef);
        if(docSnap.exists()) {
            setReport(docSnap.data());
            console.log(report);
        } else {
            console.log("Document does not exist")
        }
      
    } catch(error) {
        console.log(error)
    }}
    useEffect(() => {
        getReport();
      },[]);
    return (
        <div className="row">
        <div className="col-md-3" />
            <div className="text-center col-md-6">
            <h2 style={{ color: '#535461' }}>Health report</h2>
            <div className="shadow-sm p-3 round-boarder gb-white">
                <div className='report-span'>
                <div>
                    <p className="report">Date: {report.date} </p>
                    <p className="report">Name: {report.name} </p>
                    <p className="report">Age:{report.age} </p>
                    <p className="report">Gender : {report.gender} </p>
                    <p className="report">Height : {report.height} cm </p>
                    <p className="report">Weight : {report.weight} kg </p>
                    <p className="report">Blood Groop : {report.blood} </p>
                    <p className="report">BMI :{report.bmi} </p>
                    <p className="report">BMI class : {report.bmi_class} </p>
                </div>
                <div className='report-details'>
                    <p className="report">Systolic Blood Pressure : {report.systolic_bp} mm</p>
                    <p className="report">Diastolic Blood Pressure : {report.distolic_bp} mm</p>
                    <p className="report">BP class : {report.bp_class} </p>
                    <p className="report">Cholestrol : {report.cholesterol_val} mg/dl </p>
                    <p className="report">Cholestrol Class : {report.cholesterol_class}</p>
                    <p className="report">Regular Exercise :{report.active? 'Yes' :'No'} </p>
                    <p className="report">Smoking : {report.smoke? 'Yes' :'No'} </p>
                    <p className="report">Drinking :  {report.alcohol ? 'Yes' :'No'} </p>
                    <p className="report">Cardiovascular Disease : {report.prediction ? 'Yes' :'No'} </p>
                </div>
                </div>
                
            </div>
            <p className="report">Comments : {comment} </p>
            {profile.type === "Doctor" && (
            <button className="btn purple-outline-btn" onClick={() => setShow(true)}>
            <img src={add} alt="Add Comment" className="img" />
            {' '}
            Add Comment
            </button>)}
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

