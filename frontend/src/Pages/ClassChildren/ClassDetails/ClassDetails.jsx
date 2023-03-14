import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import userService from '../../../services/user.service';

const ClassDetails = ({ }) => {

  const { id } = useParams();

  const [classInfo, setClassInfo] = useState({});
  const [children, setChildren] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await userService.getClassDetails(id);
      const childrenResponse = await userService.getChildrenFromClass(id);
      console.log(childrenResponse);
      setChildren(childrenResponse.data);
      setClassInfo(response.data);
    }
    fetchData();
  }, []);

  return (
    <section className=" py-5">
      <Container className="px-5">
        <Row className="gx-5 align-items-center justify-content-center">
          <Col lg={6} md={5} className="d-none d-xl-block text-center">
            <img className="img-fluid rounded-3 my-5" src="https://picsum.photos/650/500" alt="..." />
          </Col>
          <Col lg={6} md={7}>
            <div className="my-5 text-center text-xl-start">
              <h1 className="display-5 fw-bolder text-warning mb-2">Class name: {classInfo.name}</h1>
              <p className="lead fw-normal mb-4">Class description: {classInfo.description}</p>
              <p className="lead fw-normal mb-4">Registered Service: {classInfo.service}</p>
              <p className="lead fw-normal mb-4">Age range: {classInfo.ageRange}</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="px-5 my-5">
        <Row className="gx-5 justify-content-center">
          <Col lg={8} xl={6} >
            <div className="text-center">
              <h2 className="fw-bolder">Children In Class</h2>
            </div>
          </Col>
        </Row>
        <Row className="row gx-5">
          {children.map((child) => (
            <Col lg={4} className="mb-4">
              <div className="card h-100 shadow border-0">
                <img className="card-img-top" src="https://picsum.photos/200" alt="..." />
                <div className="card-body p-4">
                  <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">{child.firstName +" "+ child.lastName}</h5></a>
                  <p className="card-text mb-0">Notes : {child.note}</p>
                  <p className="card-text mb-0">Interest: {child.interest}</p>
                  <p className="card-text mb-0">Needs: {child.needs}</p>
                  <p className="card-text mb-0">Parent: {child.user.firstName + " " + child.user.lastName}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ClassDetails;
