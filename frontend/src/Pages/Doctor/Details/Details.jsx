import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Details.css';

const Details = () => {
    return (
        <>
            <section className="dentist-details-sec">
                <Container>
                    <Row>
                        <Col md={7} lg={8}>
                            <div className="single-dentist-details">
                                <h2>Nathan Currie </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy.</p>
                            </div>
                            <div className="dentist-award">
                                <h3>Doctor Associations</h3>
                                <ul className="p-0">
                                    <li>American Association </li>
                                    <li>Academy of General </li>
                                    <li>Carolina  Society</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={5} lg={4}>
                            <div className="dentist-profile text-center">
                                <div className="profile-img"></div>
                                <p>Name: <strong>Nathan Currie</strong></p>
                                <p>Specialization: <strong>Baby Sits</strong></p>
                                <p>Phone: <strong>1-866-764-5387</strong></p>
                                <div className="doctors-social">
                                    <a href=".#"><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a href=".#"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href=".#"><FontAwesomeIcon icon={faLinkedin} /></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Details;