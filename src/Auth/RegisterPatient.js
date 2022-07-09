import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';

function RegisterPatient() {
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [blood, setBlood] = useState('');

    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [cPasswordClass, setCPasswordClass] = useState('form-control');
    const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

    useEffect(() => {
        if (isCPasswordDirty) {
            if (password === cPassword) {
                setShowErrorMessage(false);
                setCPasswordClass('form-control is-valid')
            } else {
                setShowErrorMessage(true)
                setCPasswordClass('form-control is-invalid')
            }
        }
    }, [cPassword])

    const handleCPassword = (e) => {
        setCPassword(e.target.value);
        setIsCPasswordDirty(true);
    }

    return ( 
        <div>
        <h2 style={{ color: '#535461' }}>Create a new Account</h2>
        <div className="shadow-sm p-3 round-boarder gb-white">
            <form>
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

                <div className="email">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Email Address
                    </label>
                    <div className="input-group flex-nowrap mb-1">
                        <input
                            className="form-control"
                            type="email"
                            id="validationCustomUsername"
                            aria-describedby="inputGroupPrepend"
                            required
                            name="email"
                            placeholder="Email id"
                            aria-label="userInput"
                            value={email}
                            onChange={(e) => {
                            setEmail(e.target.value);
                            }} />
                    </div>
                </div> 
                
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" required value={password}
                        onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className={cPasswordClass} id="confirmPassword" required value={cPassword}
                        onChange={handleCPassword} />
                </div>
                {showErrorMessage && isCPasswordDirty ? <div> Passwords did not match </div> : ''}

                        
                <button className="btn purple-btn" type="submit">Sign Up</button>
            </form>
            <div className="text-center">
            <p style={{ color: '#949494', marginTop: '16px', marginBottom: '2px' }}>
                Already have an Account?
            </p>
            <Link to="/" style={{ color: '#8c52ff' }}>
                Login to an existing Account
            </Link>
            </div>
        </div>  
    
        </div>);
}


export default RegisterPatient;