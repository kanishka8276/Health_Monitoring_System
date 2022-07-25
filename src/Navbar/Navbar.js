import React from 'react';
import {useLocation} from 'react-router-dom';
import { useAuth } from "../Context/AuthContext";
import { useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function NavbarContainer() { 
  const location = useLocation();
  const {setCurrentUser,profile} = useAuth();
  const navigate = useNavigate();
    return (
      <>
      { location.pathname !== '/' && location.pathname !=='/signUp' && location.pathname !=='/auth/*' && (
    <Navbar collapseOnSelect className="nav-color" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand href={`/dashboard${profile.type}`}>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
            {profile.type === "Patient" && (<Nav className="me-auto"><Nav.Link href="/device">Register device</Nav.Link>
            <Nav.Link href="/pastReports">Past Reports</Nav.Link>
            <Nav.Link href="/caretaker">Caretaker</Nav.Link>
          </Nav>)}
        </Navbar.Collapse>
        <div className="float-end">
            <button className="btn" onClick={() => {setCurrentUser();navigate('/')}}>Sign Out</button>
          </div>
      </Container>
      
    </Navbar>)}
    </>
    );
}
export default NavbarContainer;




