import React, { useState } from 'react';
import { Link} from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    return ( 
    <div className="row">
      <div className="col-md-3" />
      <div className="text-center col-md-6">
    <h2 style={{ color: '#535461' }} className="mt-5">Sign In to your Account</h2>
     <div className="shadow-sm p-3 round-boarder gb-white">
        <form>
          <div className="mb-3">
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
                aria-label="userInput"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
           </div> 
           <div className="mt-4">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Enter Password
            </label>
            <br />
            <input
              type="password"
              id="validationCustomUsername"
              className="form-control"
              aria-describedby="inputGroupPrepend"
              required
              name="Pwd"
              value={pwd}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
            </div>
            <button className="btn purple-btn btn-signin" type="submit">Sign In</button>
        </form>
        <div className="text-center">
          <p
            style={{ color: '#949494', marginTop: '16px', marginBottom: '2px' }}
          >
            Don&apos;t have an Account?
          </p>
          <Link to="/signUp" style={{ color: '#8c52ff' }}>
            Create an Account
          </Link>
        </div>
      </div>  
      </div>    
      </div>);
}

export default Login;
