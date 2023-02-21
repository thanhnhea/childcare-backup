import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Booking.css"

const Booking = () => {
  return (
    <section>
      <Container>
        <Row>
          <div className='form-header'>
            <h1 className='header display-3 mt-3 mb-3'>Children Care</h1>
            <h2>Join And Book A Children Care</h2>
          </div>
          <hr />
          <Col lg={12}><h3>Type Of Services</h3></Col>
          <hr />
          <Row className='d-flex justify-content-between'>
            <Col lg={5}>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                <label className="form-check-label" for="exampleRadios1">
                Occasional WeeSitter (as-needed)
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                <label className="form-check-label" for="exampleRadios2">
                Last-Minute (within 24 hours)
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                <label className="form-check-label" for="exampleRadios2">
                Part-Time Nanny
                </label>
              </div>

            </Col>
            <Col lg={5}>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                <label className="form-check-label" for="exampleRadios1">
                Full-Time Nanny
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                <label className="form-check-label" for="exampleRadios2">
                Join, No Request
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                <label className="form-check-label" for="exampleRadios2">
                Event / Wedding Care
                </label>
              </div>
            </Col>
          </Row>
        </Row>
        <Row className='mt-3 d-flex justify-content-start'>
          <Col lg={12}><h3>Parent Contact Information</h3></Col>
          <hr />
          <h4 className='text-dark'>Parent Name / Legal Guardian</h4>
          <Col>

            <form>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="form6Example1" className="form-control" placeholder='First name' required />
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="form6Example2" className="form-control" placeholder='Last name' required />
                  </div>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="form6Example1" className="form-control" placeholder='Contact Number'  pattern="(\+84|0)\d{9,10}" required />
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="form6Example2" className="form-control" placeholder='Email Address'  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                  </div>
                </div>
              </div>

              <Col lg={12}><h3 className='text-dark'>Reservation Address</h3></Col>

              <Row>
                <Col>

                  <div className="form-outline mb-4">
                    <input type="text" id="form6Example3" className="form-control" placeholder='Company name' required />
                  </div>


                  <div className="form-outline mb-4">
                    <input type="text" id="form6Example4" className="form-control" placeholder='Address' required />
                  </div>

                </Col>
                <Col lg={12}>
                  <div className="form-row d-flex justify-content-between">
                    <div className="col-md-5 mb-3">
                      <input type="text" className="form-control" placeholder="City*" required />
                    </div>
                    <div className="col-md-2 mb-3">
                      <input type="text" className="form-control" placeholder="State*" required />
                    </div>
                    <div className="col-md-2 mb-3">
                      <input type="text" className="form-control" placeholder="Postal / Zip Code*" required pattern="[A-Za-z]{3}" title="Three letter country code" />
                    </div>
                  </div>
                </Col>
              </Row>
              <button type="submit" class="btn btn-primary btn-block mb-4">Submit</button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Booking;
