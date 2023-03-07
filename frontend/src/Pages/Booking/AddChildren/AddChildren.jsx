import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import userService from '../../../services/user.service';

const AddChild = () => {
    const [childData, setChildData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        notes: '',
        interest: '',
        needs: '',
    });

    const handleChange = (e) => {
        setChildData({
            ...childData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRadioChange = (e) => {
        setChildData({
            ...childData,
            gender: e.target.value,
        });
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
    
        console.log("handle submit here");
        userService.submitChildren(
          firstName,
          lastName,
          dob,
          gender,
          notes,
          interest,
          needs
        ).then(
            response => {
                // This function will execute when the Promise is resolved with a successful response
                formHeader.textContent = "Form submitted successfully";
                formHeader.style.color = "green";
                console.log(response);
              },
              error => {
                // This function will execute when the Promise is rejected with an error response
                formHeader.textContent = "Form submission failed";
                formHeader.style.color = "red";
                console.error(error);
              }
        );
      };

      const formHeader = document.querySelector("h1");

    const {
        firstName,
        lastName,
        dob,
        notes,
        gender,
        interest,
        needs,
    } = childData;

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
                        <form onSubmit={handleSubmit}>
                            <div className='row mb-4'>
                                <div className='col'>
                                    <div className='form-outline'>
                                        <input
                                            type='text'
                                            id='form6Example1'
                                            className='form-control'
                                            placeholder='First Name*'
                                            required
                                            name='firstName'
                                            value={firstName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='form-outline'>
                                        <input
                                            type='text'
                                            id='form6Example2'
                                            className='form-control'
                                            placeholder='Last Name*'
                                            required
                                            name='lastName'
                                            value={lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <Col lg={12}>
                        <div className='form-outline mb-4'>
                            <label>
                                Please tell us about your child's likes some notes*
                            </label>
                            <textarea
                                className='form-control'
                                rows='4'
                                required
                                name='notes'
                                value={notes}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </Col>

                            <Row>
                                <Col>
                                    <div className='row mb-4'>
                                        <div className='col'>
                                            <div className='form-outline'>
                                                <label>Date of Birth*</label>
                                                <input
                                                    type='date'
                                                    id='form6Example1'
                                                    className='form-control'
                                                    placeholder='First Name*'
                                                    required
                                                    name='dob'
                                                    value={dob}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='form-outline'>
                                                <label>Gender*</label>
                                                <div className='form-check'>
                                                    <input
                                                        className='form-check-input'
                                                        type='radio'
                                                        name='gender'
                                                        id='exampleRadios1'
                                                        value='True'
                                                        checked={gender === 'True'}
                                                        onChange={handleRadioChange}
                                                    />
                                                    <label className='form-check-label'>
                                                        Boy
                                                    </label>
                                                </div>
                                                <div className='form-check'>
                                                    <input
                                                        className='form-check-input'
                                                        type='radio'
                                                        name='gender'
                                                        id='exampleRadios2'
                                                        value='False'
                                                        checked={gender === 'False'}
                                                        onChange={handleRadioChange}
                                                    />
                                                    <label className='form-check-label'>
                                                        Girl
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                                                                                                    
                    <Col lg={12}>
                        <div className='form-outline mb-4'>
                            <label>
                                Please tell us about your child's likes, dislikes, and
                                interests.*
                            </label>
                            <textarea
                                className='form-control'
                                rows='4'
                                required
                                name='interest'
                                value={interest}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className='form-outline mb-4'>
                            <label htmlFor=''>
                                Please share any routines or schedules you want to share
                                with your caregiver.
                            </label>
                            <textarea
                                className='form-control'
                                rows='4'
                                required
                                name='needs'
                                value={needs}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </Col>
                 </Row>
                <button type='submit' className='btn btn-primary btn-block mb-4'>
                    Submit
                </button>
            </form>
        </Col>
     </Row >
   </Container >
</section >
);
};

export default AddChild;