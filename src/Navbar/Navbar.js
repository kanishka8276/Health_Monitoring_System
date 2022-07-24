import React from 'react';
import nonotification from '../Asset/nonotification.png'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Notification from './Notification';
import './Navbar.css';

function NavbarContainer() { 
    return (
   
    <Navbar collapseOnSelect className="nav-color" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand href="/currentReport">Current Report</Navbar.Brand>
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
          <Nav>
            <NavDropdown title="My Profile" id="collasible-nav-dropdown">
                <NavDropdown.Item href="home">Home</NavDropdown.Item>
                <NavDropdown.Item href="settings">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="signOut">
                    Sign Out
                </NavDropdown.Item>
            </NavDropdown>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    );
}
export default NavbarContainer;




