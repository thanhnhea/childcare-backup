import { faFacebook, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import serviceDetailImg from '../../Images/service-details-promo1.png';
import './Login.css';


const Login = () => {

    return (
        <>
            <section className="h-100 gradient-form pb-5">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <div className="text-center">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" className="card-img" alt="logo" />
                                                <h4 className="mt-1 mb-5 pb-1">We are Children Care Center</h4>
                                            </div>
                                            <p className="d-flex justify-content-start">Please login to your account</p>
                                            <form>
                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form2Example11" className="form-control"
                                                        placeholder="Email Address" required />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example22" placeholder="Password" className="form-control" required />
                                                </div>

                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button className="theme-btn btn-fill" type="submit">Log
                                                        in</button>
                                                    <a className="text-muted text-decoration-none" href="ChangePasword">Forgot password?</a>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">You don't have an account?</p>
                                                    <button type="button" className="btn btn-outline-danger"><a style={{textDecoration : 'None'}} href="/register">Create new</a></button>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-6">We are more than just a Children Care Center...</h4>
                                            <p className="small mb-0">We will educate children to form good habits,
                                            show them that this is also their second family.
                                            Reputation, quality, and dedication are also our 3 criteria!</p> 
                                            <br></br>
                                                <img src={serviceDetailImg} alt="expertDoctor" className="img-fluid pt-xs-5" />
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="row my-5">
                                    <div className="col-12">
                                        <div className="text-center">
                                            <h4>Or sign up with:</h4>
                                            <div className="doctors-social">
                                                <button className="loginbtn" ><FontAwesomeIcon icon={faGoogle} /></button>
                                                <button className="loginbtn" ><FontAwesomeIcon icon={faGithub} /></button>
                                                <button className="loginbtn" ><FontAwesomeIcon icon={faFacebook} /></button>
                                                <button className="loginbtn"><FontAwesomeIcon icon={faTwitter} /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;