import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import userService from '../../services/user.service';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './BookingRequest.css';

const Booking = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [children, setChildren] = useState([]);
    const [service, setService] = useState({})

    useEffect(() => {
        async function fetchData() {
            const response = await userService.getAllChildrenOfUser();
            const serviceResponse = await userService.getServiceDetail(id);
            setService(serviceResponse.data);
            setChildren(response.data);
        }
        fetchData();
    }, [])


    // const handleSubmit = (e) => {
    //     confirmAlert({
    //         title: 'Confirm to submit',
    //         message: 'Are you sure to do this?',
    //         buttons: [
    //             {
    //                 label: 'Yes',
    //                 onClick: () => {
    //                     userService.postSubmitService(id, e.id)
    //                         .then(
    //                             response => {
    //                                 alert("Booking Recorded");
    //                                 console.log(response);
    //                             },
    //                             error => {
    //                                 alert("Booking Unsuccessfully" + error)
    //                                 console.error(error);
    //                             }
    //                         );
    //                 }
    //             },
    //             {
    //                 label: 'No',
    //                 onClick: () => alert('Click No')
    //             }
    //         ]
    //     });
    // }

    const handleSubmit = (child) => {
        navigate("/checkout", {
            state: {
                child: { child },
                service: { service },
            }
        })
    }

    return (
        <Container className="mb-3 mt-4 BookingRequest">
            <Row>
                <Col sm={12} >
                    <h1>{service.serviceTitle}</h1>
                </Col>
            </Row>
            <Row className='text-left'>
                <Col sm={6} >
                    <h5>{service.serviceDetail}</h5>
                </Col>
                <Col sm={6} >
                    <Row className='ms-5 mt-5'>
                        <h5>Price:  ${service.servicePrice}</h5>
                    </Row>
                </Col>
            </Row>
            <Row className='mt-4'>
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
                                {/* <Link to={{
                                    pathname: '/checkout',
                                    state: {
                                        child: { child },
                                        service: { service },
                                    }
                                }} className="link-button">
                                    Choose this Child
                                </Link> */}
                                <Button variant="primary" onClick={() => handleSubmit(child)}>Choose this Child</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container >
    );
};

export default Booking;