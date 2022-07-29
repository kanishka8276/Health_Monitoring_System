import React from 'react';
import {useLocation} from 'react-router-dom';
import { useAuth } from "../Context/AuthContext";
import { useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function NavbarContainer() { 
  const location = useLocation();
  const {setCurrentUser,profile,currentUser} = useAuth();
  const navigate = useNavigate();
    return (
      <>
      { location.pathname !== '/' && location.pathname !=='/signUp' && location.pathname !=='/auth/Patient' && location.pathname !=='/auth/Doctor' &&  location.pathname !=='/auth/FamMem' && (
    <Navbar collapseOnSelect className="nav-color" fixed="top" variant="dark">
      <Container>
        <Link to={`/dashboard${profile.type}`} style={{color:'#fff',fontSize:'18px'}}  className="text-decoration-none m-2">Home</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
            {profile.type === "Patient" && 
            (<Nav className="me-auto">
            <Link to="/generateReport" style={{color:'#fff',fontSize:'18px'}}  className="text-decoration-none m-2"><strong>Generate Report </strong></Link>
            <Link to={`/pastReports/${currentUser.uid}`} style={{color:'#fff',fontSize:'18px'}}  className="text-decoration-none  m-2"><strong>Past Reports</strong></Link>
          </Nav>)}
        </Navbar.Collapse>
        <div className="float-end">
            <button className="btn" style={{color:'#fff',fontSize:'18px'}} onClick={() => {setCurrentUser();navigate('/')}}>Sign Out</button>
          </div>
      </Container>
      
    </Navbar>)}
    </>
    );
}
export default NavbarContainer;




