import React, { useState, useEffect } from 'react'
import { Link,useNavigate} from 'react-router-dom';
import {  doc, setDoc } from "firebase/firestore";
import { db } from "../firebase"
import { useAuth } from "../Context/AuthContext"

function RegisterPatient() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [blood, setBlood] = useState('');
    const {currentUser,setProfile} = useAuth();
    const navigate = useNavigate();
    // const dbRef = collection(db, "profile");
    const docRef = doc(db, "profile", currentUser.uid);
    const docRef1 = doc(db, "careTaker", currentUser.uid);
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(docRef);
        try {
            await setDoc(docRef1,{});
            console.log("care");
          } catch (err) {
            alert(err)
          }
        try {
            console.log("added");
            const data= {
                name: name,
                phone:phone,
                age : age,
                gender : gender,
                address : address,
                height : height,
                weight : weight,
                blood : blood,
                type: "Patient",
            };
            await setDoc(docRef,data);
            console.log("added");
            navigate("/dashboardPatient");
            setProfile(data);
          } catch (err) {
            alert(err)
          }
    }
    return ( 
        <div className="row">
        <div className="col-md-3" />
        <div className="text-center col-md-6">
        <h2 style={{ color: '#535461' }}>Fill your details</h2>
        <div className="shadow-sm p-3 round-boarder gb-white">
            <form onSubmit={submitHandler}>
            <div className="name">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label><br />
                <div className="input-group flex-nowrap mb-1">
                    <input 
                        className="form-control" 
                        type="text" 
                        id="firstName" 
                        placeholder="Name" 
                        required
                        value={name}
                        onChange={(e) => {
                        setName(e.target.value);
                        }} />
                </div>
            </div>
            <div className="phone">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label><br />
                <div className="input-group flex-nowrap mb-1">
                    <input 
                        className="form-control" 
                        type="tel" 
                        id="phone" 
                        placeholder="Phone number" 
                        required
                        value={phone}
                        onChange={(e) => {
                        setPhone(e.target.value);
                        }} />
                </div>
            </div>   
                <div className="age">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Age </label><br />
                    <div className="input-group flex-nowrap mb-1">
                    <input  
                        type="number" 
                        name=""  
                        className="form-control" 
                        placeholder="Age" 
                        required
                        value={age}
                        onChange={(e) => {
                        setAge(e.target.value);
                        }} />
                    </div>
                </div> 
                <div className="gender">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Gender </label><br />
                    <div className="input-group flex-nowrap mb-1">
                    <input  
                        type="text" 
                        name=""  
                        className="form-control" 
                        placeholder="Gender" 
                        required
                        value={gender}
                        onChange={(e) => {
                        setGender(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="height">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Height (in cm) </label><br />
                    <div className="input-group flex-nowrap mb-1">
                    <input  
                        type="number" 
                        name=""  
                        className="form-control" 
                        placeholder="Height" 
                        required
                        value={height}
                        onChange={(e) => {
                        setHeight(e.target.value);
                        }} />
                    </div>
                </div> 
                <div className="weight">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Weight (in kgs) </label><br />
                    <div className="input-group flex-nowrap mb-1">
                    <input  
                        type="number" 
                        name=""  
                        className="form-control" 
                        placeholder="Weight" 
                        required
                        value={weight}
                        onChange={(e) => {
                        setWeight(e.target.value);
                        }} />
                    </div>
                </div> 
                <div className="blood">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Blood Group </label><br />
                    <div className="input-group flex-nowrap mb-1">
                    <input  
                        type="text" 
                        name=""  
                        className="form-control" 
                        placeholder="Blood Group" 
                        required
                        value={blood}
                        onChange={(e) => {
                        setBlood(e.target.value);
                        }} />
                    </div>
                </div> 
                <div className="address">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Address </label><br />
                    <div className="input-group flex-nowrap mb-1">
                    <input  
                        type="text"
                        name=""  
                        className="form-control" 
                        placeholder="Address" 
                        required
                        value={address}
                        onChange={(e) => {
                        setAddress(e.target.value);
                        }} />
                    </div>
                </div>     
                <button className="btn purple-btn btn-signin" type="submit">Submit</button>
            </form>
            
        </div>  
        </div>
        </div>);
}


export default RegisterPatient;