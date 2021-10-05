import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const activeStyle = {
        color: "#ec5251"
    }
    const style = {
        color: "black",
        textDecoration: "none",
    }
    return (
        <div>
            <Navbar bg="" expand="lg" variant="">
                <Container>
                    <Navbar.Brand className="logo" href="/home">Beacon<span className="theme-color">IT</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="nav-links" href="/home">
                            <NavLink style={style} activeStyle={activeStyle}  to="/home">Home</NavLink>
                        </Nav.Link>
                        <Nav.Link className="nav-links" href="/services">
                            <NavLink style={style} activeStyle={activeStyle} to="/services">Services</NavLink>
                        </Nav.Link>
                        <Nav.Link className="nav-links" href="/about">
                            <NavLink style={style} activeStyle={activeStyle} to="/about">About Us</NavLink>
                        </Nav.Link>
                        <Nav.Link className="nav-links" href="/contact">
                            <NavLink style={style} activeStyle={activeStyle} to="/contact">Contact</NavLink>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default NavBar;