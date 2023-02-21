import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AddChild = () => {
    return (
        <section>
            <Container>
                <Row>
                    <div className='form-header'>
                        <h1 className='header display-3 mt-3 mb-3'>Add Child</h1>
                    </div>
                    <hr />

                </Row>
                <Row className='mt-3 d-flex justify-content-start'>
                    <Col>
                        <form>
                            <div className="row mb-4">
                                <div className="col">
                                    <div className="form-outline">
                                        <input type="text" id="form6Example1" className="form-control" placeholder='First Name*' required />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <input type="text" id="form6Example2" className="form-control" placeholder='Last Name*' required />
                                    </div>
                                </div>
                            </div>

                            <Row>
                                <Col >
                                    <div className="row mb-4">
                                        <div className="col">
                                            <div className="form-outline">
                                                <label>Date of Birth*</label>
                                                <input type="date" id="form6Example1" className="form-control" placeholder='First Name*' required />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-outline">
                                                <label>Gender*</label>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                                    <label className="form-check-label" for="exampleRadios1">
                                                        Male
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                                    <label className="form-check-label" for="exampleRadios2">
                                                        Female
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </Col>
                                <Col lg={12}>
                                    <div class="form-outline mb-4">
                                        <label>Please tell us about your child's likes, dislikes, and interests.*</label>
                                        <textarea className="form-control" rows="4" required></textarea>                     
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div class="form-outline mb-4">
                                        <label htmlFor="">Please share any routines or schedules you want to share with your caregiver.</label>
                                        <textarea className="form-control" rows="4" required></textarea>                     
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

export default AddChild;
