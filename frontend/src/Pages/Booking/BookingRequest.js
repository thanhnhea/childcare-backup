import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import userService from '../../services/user.service';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Booking = () => {

    const { id } = useParams();


    const [children, setChildren] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const response = await userService.getAllChildrenOfUser();
            setChildren(response.data);
        }
        fetchData();
    }, [])


    const handleSubmit = (e) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        userService.postSubmitService(id, e.id)
                            .then(
                                response => {
                                    alert("Booking Recorded");
                                    console.log(response);
                                },
                                error => {
                                    alert("Booking Unsuccessfully" + error)
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
        <Container className="mb-3">
            <Row>
                <h2>Please choose your child for the service. </h2>
                {children.map((child) => (
                    <Col sm={12} md={6} lg={4} key={child.id}>
                        <Card className="my-3">
                            <Card.Body>
                                <Card.Title>{child.firstName} {child.lastName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{child.status}</Card.Subtitle>
                                <Card.Text>
                                    Age: {Math.floor((new Date() - new Date(child.dob)) / (365.25 * 24 * 60 * 60 * 1000))}
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleSubmit(child)}>Choose this Child</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>

            </Row>
        </Container>
    );
};

export default Booking;