import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';

function RegisterDoctor() {
    const [specialization, setSpecialization] = useState('');
    const [experience, setExperience] = useState(''); 
    const [address, setAddress]=useState('');
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

export default RegisterDoctor;