import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';


function RegisterFamMem() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

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
        <div className="row">
        <div className="col-md-3" />
        <div className="text-center col-md-6">
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
                        
                <button className="btn purple-btn btn-signin" type="submit">Sign Up</button>
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
    </div>
        </div>);
}

export default RegisterFamMem;