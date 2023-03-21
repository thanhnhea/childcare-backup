import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import userService from '../../../services/user.service';
const Checkout = () => {
    const { child } = useLocation().state.child;
    const { service } = useLocation().state.service;
    console.log(child)
    console.log(service)
    return (
        <Container className="mb-3 mt-4">
            <Row className="mx-5">
                <h1>Check out</h1>
            </Row>
            <Row >
                <Col sm={6} lg={6}>
                    <Card className="my-3 mx-5">
                        <Card.Title className='m-5 text-left'>
                            <h1>{service.serviceTitle}</h1>
                        </Card.Title>
                        <Card.Subtitle>
                            {service.servicePrice} USD
                        </Card.Subtitle>
                        <Card.Body>
                            <Card.Text className='text-left'>
                                {service.serviceDetail}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} lg={6}>
                    <Card className="my-3 mx-5">
                        <Card.Title className='m-5 text-left'>
                            <h1>Your Child: {child.firstName} {child.lastName}</h1>
                        </Card.Title>
                        <Card.Subtitle>
                           Age: {Math.floor((new Date() - new Date(child.dob)) / (365.25 * 24 * 60 * 60 * 1000))}
                        </Card.Subtitle>
                        <Card.Body>
                            <Card.Text className='text-left'>
                            Interest: {child.interest}
                            </Card.Text>
                            <Card.Text className='text-left'>
                            Needs: {child.needs}
                            </Card.Text>
                            <Card.Text className='text-left'>
                            Note: {child.note}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Checkout;