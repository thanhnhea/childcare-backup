import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png';
import './Header.css';

const Header = () => {

    return (
        <div className="head-bg">
            <Navbar className="navbar" collapseOnSelect expand="lg">
                <Container className="container-head">
                    <Navbar.Brand href="/home"><img src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Link to="/home" className='list-item text-decoration-none'>Home</Link>
                            <Link to="/about" className='list-item text-decoration-none'>About</Link>
                            <Link to="/service" className='list-item text-decoration-none'>Service</Link>
                            <Link to="/doctor" className='list-item text-decoration-none'>Doctor</Link>
                            <Link to="/contact" className='list-item text-decoration-none'>Contact</Link>
                            <Link to="/ClassList" className='list-item text-decoration-none'>Class</Link>
                            <Link to="/login" type="button" className="btn btn-danger">Login</Link>
                         
                           
                                <Navbar.Text><a href="/UserDetails"><FontAwesomeIcon icon={faUser} /><span className="userName"></span></a></Navbar.Text>
                       
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;