import React from 'react';
import nonotification from '../Asset/nonotification.png'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function NavbarContainer() { 
    return (
   
    <Navbar collapseOnSelect className="nav-color" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand href="/dashboardPatient">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/device">Register device</Nav.Link>
            <Nav.Link href="/pastReports">Past Reports</Nav.Link>
            <Nav.Link href="/caretaker">Caretaker</Nav.Link>
          </Nav>
          <Nav.Link>
                <img
                        src={nonotification}
                        alt="notifications"
                        className="navbar-icons"
                        style={{ height: '20px'}} 
                />
          </Nav.Link>
          <Nav >
            <Nav.Link href="/signOut">Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    );
}
export default NavbarContainer;




