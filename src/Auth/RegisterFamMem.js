import React, { useState } from 'react';
import { Link} from 'react-router-dom';


function RegisterFamMem() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');
   
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
                        
                <button className="btn" type="submit">Sign Up</button>
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

export default RegisterFamMem;