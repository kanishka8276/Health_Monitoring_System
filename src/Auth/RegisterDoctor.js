import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';

function RegisterDoctor() {
    const [specialization, setSpecialization] = useState('');
    const [experience, setExperience] = useState(''); 
    const [address, setAddress]=useState('');
    
    return ( 
        <div className="row">
        <div className="col-md-3" />
        <div className="text-center col-md-6">
        <h2 style={{ color: '#535461' }}>Fill your details</h2>
        <div className="shadow-sm p-3 round-boarder gb-white">
            <form>
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