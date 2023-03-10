import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import serviceDetailImg from '../../../Images/service-details-promo1.png';
import userService from '../../../services/user.service';
import './Detail.css';

const Detail = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await userService.getAllService();
            setServices(response.data);
        }
        fetchData();
    }, []);

    if (!services) {
        return <div className='m10'> ..... Loading</div>
    }
    return (
        <div>
            {services.map((service) => (
                <section className="healing p-5" key={service.id}>
                    <Container>
                        <Row className="align-items-center p-5" >
                            <Col lg={6} sm={12} xs={12}>
                                <div className="expertDentist-txt mt-5 mt-lg-0">
                                    <h2 className="fw-bold">{service.serviceTitle}</h2>
                                    <p>{service.serviceDetail}</p>
                                    <Link to={`/booking/${service.id}`} className="link-button">Book this Service</Link>
                                </div>
                            </Col>
                            <Col lg={6} sm={12} xs={12}>
                                <img src={serviceDetailImg} alt="expertDentist" className="img-fluid" />
                            </Col>
                        </Row>
                    </Container>
                </section>
            ))}
        </div>
    );
};

export default Detail;