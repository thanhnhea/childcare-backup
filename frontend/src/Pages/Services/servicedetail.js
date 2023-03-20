import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import authService from "../../services/auth.service";
import userService from "../../services/user.service";
import { Link } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";

const ServiceDetail = () => {

    const { id } = useParams();

    const [service, setService] = useState({});

    const [isUser, setIsUser] = useState(false);
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        async function fetchData() {
            const response = await userService.getServiceDetail(id);
            setService(response.data);
        }
        fetchData();

        const user = authService.getCurrentUser();
        if (user) {
            setIsUser(user.roles.includes("ROLE_USER"));
            setCurrentUser(user)
        }
    }, []);

    return (
        <Container >
            <Row className="text-left" >
                <h1 className="mt-5 mb-5 text-lg font-medium">{service.serviceTitle}</h1></Row>
            <Row>
                <Col sm={{ span: 6, offset: 0 }}>
                    <p style={{ float: 'left' }}>{service.serviceDetail}</p>
                </Col>
                <Col>
                    <div className="mt-2">
                        <p className="font-medium">Price: ${service.servicePrice}</p>
                    </div>
                    <div className="mt-2">
                        <p className="font-medium">Created Date: {service.createdDate}</p>
                    </div>

                    <div className="mb-5">
                        {isUser && (
                            <Link to={`/booking/${service.id}`} className="link-button">Book this Service</Link>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceDetail;
