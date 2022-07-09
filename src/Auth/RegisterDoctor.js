import React, { useState } from 'react';
import { Link} from 'react-router-dom';

function RegisterDoctor() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [name, setName] = useState('');
    const [experience, setExperience] = useState(''); 
   
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
                <div className="password">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Enter Password
                    </label>
                    <br />
                    <input
                        type="password"
                        id="validationCustomUsername"
                        className="form-control"
                        placeholder="Password"
                        aria-describedby="inputGroupPrepend"
                        required
                        name="Pwd"
                        value={pwd}
                        onChange={(e) => {
                            setPwd(e.target.value);
                        }} />
                </div>
                        
                <button className="btn purple-btn" type="submit">Sign Up</button>
            </form>
            <div className="text-center">
            <p style={{ color: '#949494', marginTop: '16px', marginBottom: '2px' }}>
                Already have an Account?
            </p>
            <Link to="/login" style={{ color: '#8c52ff' }}>
                Login to an existing Account
            </Link>
            </div>
        </div>  
    
        </div>);
}

export default RegisterDoctor;