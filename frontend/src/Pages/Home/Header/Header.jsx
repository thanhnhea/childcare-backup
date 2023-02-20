// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png';
import './Header.css';

import AuthService from "../../../services/auth.service";
import { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user,
                showModeratorBoard: user.roles.includes("ROLE_MANAGER"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN"),
            });
        }
    }

    logOut() {
        AuthService.logout();
        this.setState({
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        });
    }
    render() {
        const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

        return (
            <div className="head-bg">
                <Navbar className="navbar" collapseOnSelect expand="lg">
                    <Container className="container-head">
                        <Navbar.Brand href="/home"><img src={logo} alt="logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto align-items-center">
                                <Link to="/home" className='list-item text-decoration-none'>Home</Link>
                                <Link to="/about" className='list-item text-decoration-none'>About</Link>
                                <Link to="/service" className='list-item text-decoration-none'>Service</Link>
                                <Link to="/doctor" className='list-item text-decoration-none'>Doctor</Link>
                                <Link to="/contact" className='list-item text-decoration-none'>Contact</Link>
                                {showModeratorBoard && (
                                    <Link to={"/mod"} className="list-item text-decoration-none">
                                        Manager Board
                                    </Link>
                                )}
                                {showAdminBoard && (
                                    <Link to={"/admin"} className="list-item text-decoration-none">
                                        Admin Board
                                    </Link>
                                )}

                                {currentUser ? (
                                    <div className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link to={"/profile"} className="list-item text-decoration-none">
                                                {currentUser.username}
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/login" className="list-item text-decoration-none" onClick={this.logOut}>
                                                LogOut
                                            </a>
                                        </li>
                                    </div>
                                ) : (<Link to="/login" type="button" className="btn btn-danger">Login</Link>)}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
// <Navbar.Text><a href="/UserDetails"><FontAwesomeIcon icon={faUser} /><span className="userName"></span></a></Navbar.Text>
export default Header;