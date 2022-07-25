import React, { useState, useEffect } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase"
import { useAuth } from "../Context/AuthContext"

function RegisterFamMem() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const {currentUser,setProfile} = useAuth();
    // const dbRef = collection(db, "profile");
    const navigate = useNavigate();
    const docRef = doc(db, "profile", currentUser.uid)
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(docRef);
        try {
            console.log("added");
            const data= {
                name:name,
                phone:phone,
                type:"Family Member",
            };
            await setDoc(docRef,data);
            console.log("added");
            navigate("/dashboardFamMem");
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
            <button className="btn purple-btn btn-signin" type="submit">Submit</button>  
            </form>
            </div> 
            </div>
            </div>
            );}
export default RegisterFamMem;