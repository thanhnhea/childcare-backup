import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import userService from '../../../services/user.service';
import './AddChildren.css';

const AddChild = () => {
    const [childData, setChildData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        interest: '',
        needs: '',
        note: '',
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

    const [errors, setErrors] = useState({});

  
    useEffect(() => {
        const validateForm = () => {
          let errors = {};
    
          if (!firstName) {
            errors.firstName = '';
          } else if (!/^[a-zA-Z0-9]+$/.test(firstName)) {
            errors.firstName = 'Name can not contain special character.';
          }
    
          if (!lastName) {
            errors.lastName = '';
          } else if (!/^[a-zA-Z0-9]+$/.test(lastName)) {
            errors.lastName = 'Name can not contain special character.';
          }   
    
          if (!interest) {
            errors.interest = '';
          } else if (!/^[a-zA-Z0-9\s]+$/.test(interest)) {
            errors.interest = 'Interest can not contain special character.';
          }

          if (!needs) {
            errors.needs = '';
          } else if (!/^[a-zA-Z0-9\s]+$/.test(needs)) {
            errors.needs = 'Needs can not contain special character.';
          }

          if (!note) {
            errors.note = '';
          } else if (!/^[a-zA-Z0-9\s]+$/.test(note)) {
            errors.note = 'Needs can not contain special character.';
          }
    
          setErrors(errors);
        };
    
        validateForm();
      }, [childData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here

        console.log("handle submit here");
        userService.submitChildren(
            firstName,
            lastName,
            dob,
            gender,
            interest,
            needs,
            note
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
        gender,
        interest,
        needs,
        note,
    } = childData;

    return (
        <section className='AddChild'>
            <Container>
                <Row>
                    <div className='form-header text-center'>
                        <h1 className='header display-3 mt-3 mb-3'>Add Child</h1>
                    </div>
                    <hr />
                </Row>
                <Row className='mt-3 d-flex justify-content-start'>
                    <Col>
                        <form onSubmit={handleSubmit}>
                            <div className='row mb-4'>
                                <div className='col'>
                                    <div className='form-outline'><br/>
                                    {errors.firstName && <span style={{color:"red"}}>{errors.firstName}</span>}
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
                                    <div className='form-outline'><br/>
                                    {errors.lastName && <span style={{color:"red"}}>{errors.lastName}</span>}
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

                            <Col lg={12} >
                                <div className='form-outline mb-4'>
                                    <label className="mb-1">
                                        Please give us some note about your child*
                                    </label><br/>
                                    {errors.note && <span style={{color:"red"}}>{errors.note}</span>}
                                    <textarea
                                        className='form-control'
                                        rows='4'
                                        required
                                        name='note'
                                        value={note}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </Col>

                            <Row>
                                <Col>
                                    <div className='row mb-4'>
                                        <div className='col'>
                                            <div className='form-outline'>
                                                <label className="mb-1">Date of Birth*</label>
                                                
                                                <input
                                                    type='date'
                                                    id='form6Example1'
                                                    className='form-control'
                                                    placeholder='First Name*'
                                                    required
                                                    name='dob'
                                                    value={dob}
                                                    onChange={handleChange}
                                                    max={new Date().toISOString().split("T")[0]} 
                                                />
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='form-outline'>
                                                <label className="mb-1">Gender*</label>
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
                                        <label className="mb-1">
                                            Please tell us about your child's interests.*
                                        </label><br/>
                                        {errors.interest && <span style={{color:"red"}}>{errors.interest}</span>}
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
                                        <label htmlFor='' className="mb-1">
                                            Please share any routines or schedules you want to share
                                            with your caregiver.
                                        </label><br/>
                                        {errors.needs && <span style={{color:"red"}}>{errors.needs}</span>}
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
                            <button type='submit' className='btn btn-primary btn-block mb-4 px-4 py-2'>
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