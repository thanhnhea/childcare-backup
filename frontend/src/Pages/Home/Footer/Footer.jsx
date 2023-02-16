import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-bg">
            <Container>
                <Row className="text-white">
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Practices</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">For Patients</NavLink>
                                <NavLink className="footer-link">FAQ's</NavLink>
                                <NavLink className="footer-link">About</NavLink>
                                <NavLink className="footer-link">Contact Us</NavLink>
                                <NavLink className="footer-link">Blog</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Resources</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">New Patients</NavLink>
                                <NavLink className="footer-link">Meet the Team</NavLink>
                                <NavLink className="footer-link">Patient Form</NavLink>
                                <NavLink className="footer-link">Insurance</NavLink>
                                <NavLink className="footer-link">Account Login</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Services</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Sevice 1</NavLink>
                                <NavLink className="footer-link">Sevice 2</NavLink>
                                <NavLink className="footer-link">Sevice 3</NavLink>
                                <NavLink className="footer-link">Sevice 4</NavLink>
                                <NavLink className="footer-link">Sevice 5</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Our Address</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Datobbo Dentistry 5212 Cedar</NavLink>
                                <NavLink className="footer-link">55 West, 33rd Street, 5th Floor, New York.</NavLink>
                                <NavLink className="footer-link">Phone: (888) 4421-1238-32</NavLink>
                                <NavLink className="footer-link">Email: childrencarecenter@gmail.com</NavLink>
                                <NavLink className="footer-link">Fax: +(09)75 5867 340</NavLink>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copy-right text-center text-white">
                <p className='mb-0'>&copy; 2023 - <span className="developer">Children Care</span> | All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;