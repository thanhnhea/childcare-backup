import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { confirmAlert } from 'react-confirm-alert';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import userService from '../../../services/user.service';
const Checkout = () => {
    
    const navigate = useNavigate();
    const { child } = useLocation().state.child;
    const { service } = useLocation().state.service;
    console.log(child)
    console.log(service)
    const handleOnApproved = (details) => {
        userService.postSubmitService(service.id, child.id, true)
            .then(
                response => {
                    alert("Booking Recorded on" + details.payer.name.given_name);
                    console.log(response);
                },
                error => {
                    alert("Booking Unsuccessful" + error)
                    console.error(error);
                }
            );
    }

    const handleSubmit = (e) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        userService.postSubmitService(service.id, e.id, false)
                            .then(
                                response => {
                                    alert("Booking Recorded");
                                    console.log(response);
                                },
                                error => {
                                    alert("Booking Unsuccessful" + error)
                                    console.error(error);
                                }
                            );
                    }
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ]
        });
    }
    return (
        <Container className="mb-3 mt-4">
            <Row className="mx-5">
                <h1>Check out</h1>
            </Row>
            <Row >
                <Col sm={6} lg={6} className=" d-flex align-items-stretch">
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
                <Col sm={6} lg={6} className=" d-flex align-items-stretch">
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
            <Row>
                <Col sm={12}>
                    <Button variant="primary" onClick={() => handleSubmit(child)}>Choose this Child</Button>
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <Col sm={3} lg={3}>
                    <PayPalScriptProvider options={{ "client-id": 
                    "AYPw-Q-dwQogBKRwCWqKvTrcOPZ2buIwYn2xTf6DsLfh8AwleHZWCrVH9j8mDgDKvGjr0RAxNEz_gJ3f" }}>
                        <PayPalButtons style={{ layout: "horizontal" }}
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                value: service.servicePrice,
                                            },
                                        },
                                    ],
                                });
                            }}
                            onApprove={(data, actions) => {
                                return actions.order.capture().then(function (details) {
                                    handleOnApproved(details);
                                })
                            }}
                        />
                    </PayPalScriptProvider>
                </Col>
            </Row>
        </Container>
    );
};

export default Checkout;