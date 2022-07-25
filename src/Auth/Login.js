import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { useAuth } from "../Context/AuthContext"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase"

const auth = getAuth();

function Login() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const {setCurrentUser, currentUser} = useAuth();
    const navigate = useNavigate();
    async function handleSubmit(e) {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, pwd)
  .then((userCredential) => {
    setCurrentUser(userCredential.user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  const docRef = doc(db, "profile", currentUser.uid);
  console.log(currentUser);
  try {
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()) {
        console.log(docSnap.data());
    } else {
        console.log("Document does not exist")
    }
    navigate(`/dashboard${docSnap.data().type}`);
} catch(error) {
    console.log(error)
}

    }
    return ( 
    <div className="row">
      <div className="col-md-3" />
      <div className="text-center col-md-6">
    <h2 style={{ color: '#535461' }} className="mt-5">Sign In to your Account</h2>
     <div className="shadow-sm p-3 round-boarder gb-white">
        <form onSubmit={handleSubmit}>
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
