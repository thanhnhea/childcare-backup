import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import expertDentist from '../../../Images/experienceddoctor.png';
import './Doctor.css';

const Doctor = () => {
    return (
        <section className='expert-dentist'>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <img src={expertDentist} alt="expertDentist" className="img-fluid" />
                    </Col>
                    <Col lg={6}>
                        <div className="expertDentist-txt mt-5 mt-lg-0">
                            <h2>Experienced Doctor</h2>
                            <p>
                                A pediatrician is a doctor who specializes in treating infants, children, adolescents, and young adults. A pediatrician understands the unique physical, emotional, and developmental needs of your child at different stages of life. A pediatrician can prevent, diagnose, and manage a wide range of health issues that affect children, such as infections, injuries, diseases, dysfunctions, developmental delays, behavioral problems, and more.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Doctor;