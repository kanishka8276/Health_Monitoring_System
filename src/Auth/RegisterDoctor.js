import React, { useState, useEffect } from 'react'
import { Link,useNavigate} from 'react-router-dom';
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../Context/AuthContext";

function RegisterDoctor() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [experience, setExperience] = useState(''); 
    const [address, setAddress]=useState('');
    const {currentUser,setProfile} = useAuth();
    const navigate = useNavigate();
    console.log(currentUser);
    const docRef = doc(db, "profile", currentUser.uid);
    const docRef1 = doc(db, "myPatients", currentUser.uid);
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await setDoc(docRef1,{});
            console.log("care");
          } catch (err) {
            alert(err)
          }
        console.log(docRef);
        try {
            console.log("added");
            const data= {
                name:name,
                phone:phone,
                specialization :specialization,
                experience :experience,
                address :  address,
                type:"Doctor",
                
            };
            await setDoc(docRef,data);
            console.log("added");
            navigate("/dashboardDoctor");
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
                <div className="specialization">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Specialization </label><br />
                    <div className="input-group flex-nowrap mb-1">
                    <input  
                        type="text" 
                        name=""  
                        className="form-control" 
                        placeholder="Specialization" 
                        required
                        value={specialization}
                        onChange={(e) => {
                        setSpecialization(e.target.value);
                        }} />
                    </div>
                </div> 
                <div className="experience">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Years of Experience (in years) </label><br />
                    <div className="input-group flex-nowrap mb-1">
                    <input  
                        type="number" 
                        name=""  
                        className="form-control" 
                        placeholder="Years of Experience" 
                        required
                        value={experience}
                        onChange={(e) => {
                        setExperience(e.target.value);
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

export default RegisterDoctor;