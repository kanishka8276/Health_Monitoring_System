import React, { useState, useEffect } from 'react';

function RegisterFamMem() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    return ( 
        <div className="row">
        <div className="col-md-3" />
        <div className="text-center col-md-6">
        <h2 style={{ color: '#535461' }}>Fill your details</h2>
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
            </form>
            </div> 
            </div>
            </div>
            );}
export default RegisterFamMem;