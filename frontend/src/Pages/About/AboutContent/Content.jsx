import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Content.css';

const Content = () => {
    return (
        <section className="about-content-sec">
            <Container>
                <Row>
                    <Col md={12} lg={8}  className="text-center">
                        <div className="section-title">
                            <h1>Some information about</h1>
                            <h2>Children Care Center</h2>
                        </div>
                        <p className="w-50 m-auto content-inner">Since 1998, Children Care Center has proudly combined traditional and modern methods
                        of raising and caring for children. Dr. John Dae, Micha and his team have brought effective strategies,
                        ways to teach and care for children, bringing a sense of security to parents.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Content;