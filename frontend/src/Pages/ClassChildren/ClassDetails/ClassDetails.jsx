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
              <h1 className="display-5 fw-bolder text-warning mb-2">{classInfo.name}</h1>
              <p className="lead fw-normal mb-4">{classInfo.description}</p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <a className="btn btn-primary btn-lg px-4 me-sm-3" href="/Children">Students In Class</a>
              </div>
            </div>
          </Col>

        </Row>
      </Container>

      <Container className="px-5 my-5">
        <Row className="gx-5 justify-content-center">
          <Col lg={8} xl={6} >
            <div className="text-center">
              <h2 className="fw-bolder">From our blog</h2>
              <p className="lead fw-normal text-muted mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
            </div>
          </Col>
        </Row>
        <Row className="row gx-5">
          <Col lg={4} className="mb-5">
            <div className="card h-100 shadow border-0">
              <img className="card-img-top" src="https://picsum.photos/200" alt="..." />
              <div className="card-body p-4">
                <div className="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">Huong Duong Awards</h5></a>
                <p className="card-text mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                <div className="d-flex align-items-end justify-content-between">
                  <div className="d-flex align-items-center">
                    <img className="rounded-circle me-3" src="https://picsum.photos/200" alt="..." />
                    <div className="small">
                      <div className="fw-bold">Kelly Rowan</div>
                      <div className="text-muted">March 12, 2023 &middot; 6 min read</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} className=" mb-5">
            <div className="card h-100 shadow border-0">
              <img className="card-img-top" src="https://picsum.photos/200" alt="..." />
              <div className="card-body p-4">
                <div className="badge bg-primary bg-gradient rounded-pill mb-2">Media</div>
                <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">Huong Duong Happy</h5></a>
                <p className="card-text mb-0">This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                <div className="d-flex align-items-end justify-content-between">
                  <div className="d-flex align-items-center">
                    <img className="rounded-circle me-3" src="https://picsum.photos/200" alt="..." />
                    <div className="small">
                      <div className="fw-bold">Josiah Barclay</div>
                      <div className="text-muted">March 23, 2023 &middot; 4 min read</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} className="mb-5">
            <div className="card h-100 shadow border-0">
              <img className="card-img-top" src="https://picsum.photos/200" alt="..." />
              <div className="card-body p-4">
                <div className="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">Huong Duong Lucky</h5></a>
                <p className="card-text mb-0">Some more quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                <div className="d-flex align-items-end justify-content-between">
                  <div className="d-flex align-items-center">
                    <img className="rounded-circle me-3" src="https://picsum.photos/200" alt="..." />
                    <div className="small">
                      <div className="fw-bold">Evelyn Martinez</div>
                      <div className="text-muted">April 2, 2023 &middot; 10 min read</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ClassDetails;
