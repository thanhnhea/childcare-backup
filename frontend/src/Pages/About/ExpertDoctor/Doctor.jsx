import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import expertDentist from '../../../Images/experienceddentist.png';
import './Doctor.css';

const Dentist = () => {
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
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, ducimus? Fuga similique ducimus deleniti, quas beatae incidunt repellendus dolorem ex dolore sit sunt quaerat dicta quia non? Sapiente, ab iure?</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quae adipisci quam voluptatem! Fugit, deserunt? Aspernatur inventore, ex ipsam perspiciatis vero, nobis facilis, fugiat explicabo cupiditate dolor nihil sunt nisi.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Dentist;