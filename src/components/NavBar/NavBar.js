import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">BeaconIT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/home">
                            <NavLink activeStyle={activeStyle}  to="/home">Home</NavLink>
                        </Nav.Link>
                        <Nav.Link href="/services">
                            <NavLink activeStyle={activeStyle} to="/services">Services</NavLink>
                        </Nav.Link>
                        <Nav.Link href="/about">
                            <NavLink to="/about">About Us</NavLink>
                        </Nav.Link>
                        <Nav.Link href="/contact">
                            <NavLink to="/contact">Contact</NavLink>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default NavBar;