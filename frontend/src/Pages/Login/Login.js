import { faFacebook, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import serviceDetailImg from '../../Images/service-details-promo1.png';
import './Login.css';


import AuthService from "../../services/auth.service";
import { withRouter } from '../../common/with-router';

class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: "",
            usernameError: "",
            passwordError: ""
        };
    }

    onChangeUsername(e) {
        const username = e.target.value;
        const usernameError = this.validateUsername(username);

        this.setState({
            username: username,
            usernameError: usernameError
        });
    }

    onChangePassword(e) {
        const password = e.target.value;
        const passwordError = this.validatePassword(password);

        this.setState({
            password: password,
            passwordError: passwordError
        });
    }

    validateUsername(username) {
        if (!username) {
            return "Username is required.";
        } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
            return "Username should only contain letters and numbers.";
        } else {
            return "";
        }
    }

    validatePassword(password) {
        if (!password) {
            return "Password is required.";
        } else if (password.length < 5) {
            return "Password should have at least 5 characters.";
        } else {
            return "";
        }
    }

    handleLogin(e) {
        e.preventDefault();
        const formHeader = document.querySelector("h3");
        const usernameError = this.validateUsername(this.state.username);
        const passwordError = this.validatePassword(this.state.password);

        if (usernameError || passwordError) {
            this.setState({
                usernameError: usernameError,
                passwordError: passwordError
            });
            return;
        }

        this.setState({
            message: "",
            loading: true
        });
        AuthService.login(this.state.username, this.state.password).then(
            () => {
                this.props.router.navigate("/profile");
                window.location.reload();
            },
            error => {
                formHeader.textContent = "Login False";
                formHeader.style.color = "red";
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    loading: false,
                    message: resMessage
                });
            }
        );
    }
    render() {
        return (
            <div>
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
                                                    <h4 className="mt-1 mb-5 pb-1">We are The Children Care Team</h4>
                                                </div>
                                                <h3 className="d-flex justify-content-start">Please login to your account</h3>
                                                <form
                                                    onSubmit={this.handleLogin}
                                                    ref={c => {
                                                        this.form = c;
                                                    }}
                                                >
                                                    <div className="form-outline mb-4">
                            <label htmlFor="username">Username</label>
                            <input
                              type="text"
                              className={`form-control ${
                                this.state.usernameError ? "is-invalid" : ""
                              }`}
                              name="username"
                              value={this.state.username}
                              onChange={this.onChangeUsername}
                              validations={["required", "username"]}
                            />
                            {this.state.usernameError && (
                              <div className="invalid-feedback">
                                Please enter a valid username
                              </div>
                            )}
                          </div>

                          <div className="form-outline mb-4">
                            <label htmlFor="password">Password</label>
                            <input
                              type="password"
                              className={`form-control ${
                                this.state.passwordError ? "is-invalid" : ""
                              }`}
                              name="password"
                              value={this.state.password}
                              onChange={this.onChangePassword}
                              validations={["required", "password"]}
                            />
                            {this.state.passwordError && (
                              <div className="invalid-feedback">
                                Please enter a correct password
                              </div>
                            )}
                                                    </div>

                                                    <div className="text-center pt-1 mb-5 pb-1">
                                                        <div type="submit" className="theme-btn btn-fill" onClick={this.handleLogin}>
                                                            <span>Login</span>
                                                        </div>
                                                        <a className="text-muted text-decoration-none" href="/forgetPassword">Forgot password?</a>
                                                    </div>

                                                    <div className="d-flex align-items-center justify-content-center pb-4">
                                                        <p className="mb-0 me-2">Don't have an account?</p>
                                                        <button type="button"
                                                            className="btn btn-outline-danger">
                                                            <a style={{ textDecoration: 'None' }} href="/register">Create new</a>
                                                        </button>
                                                    </div>

                                                </form>

                                            </div>
                                        </div>
                                        <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                                <h4 className="mb-4">We are more than just a company</h4>
                                                <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                <img src={serviceDetailImg} alt="expertDoctor" className="img-fluid pt-xs-5" />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row my-5">
                                        <div className="col-12">
                                            <div className="text-center">
                                                <h4>or sign up with:</h4>
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
            </div>
        )
    }

};


export default withRouter(Login); 