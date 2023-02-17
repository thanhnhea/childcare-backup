import "./Register.css"
import React, { useState, useEffect } from 'react';
const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const { firstName, lastName, username, phone, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  useEffect(() => {
    const validateForm = () => {
      let errors = {};

      if (!firstName) {
        errors.firstName = 'First name is required';
      }

      if (!lastName) {
        errors.lastName = 'Last name is required';
      }

      if (!username) {
        errors.username = 'Username is required';
      }

      if (!phone) {
        errors.phone = 'Phone number is required';
      } else if (!/^[0-9]+$/.test(phone)) {
        errors.phone = 'Phone number must only contain digits';
      }

      if (!email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email is invalid';
      }

      if (!password) {
        errors.password = 'Password is required';
      } else if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
      }

      if (!confirmPassword) {
        errors.confirmPassword = 'Confirm password is required';
      } else if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }

      setErrors(errors);
    };

    validateForm();
  }, [formData]);

  return (
    <section classNameName="vh-100 gradient-custom">
      <div classNameName="container-fluid py-5 h-100">
        <div classNameName="row justify-content-center align-items-center h-100">
          <div classNameName="col-md-9">
            <div className="card shadow-2-strong card-registration" >
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Registration Form</h3>
                <form onSubmit={handleSubmit}>

                  <div className="row">
                    <div className="col-md-12 mb-4">

                      <div className="form-outline">
                        {errors.firstName && <span>{errors.firstName}</span>}
                        <input name="firstName" value={firstName} onChange={handleChange} placeholder="First Name" type="text" id="firstName" className="form-control form-control-lg" required />
                      </div>

                    </div>

                    <div classNameName="col-md-12 mb-4">

                      <div className="form-outline">
                        {errors.lastName && <span>{errors.lastName}</span>}
                        <input name="lastName" value={lastName} onChange={handleChange} placeholder="Last Name" type="text" id="lastName" className="form-control form-control-lg" required />
                      </div>

                    </div>

                    <div className="col-md-12 mt-4 mb-4">

                      <div className="form-outline">
                        {errors.username && <span>{errors.username}</span>}
                        <input name="username" value={username} onChange={handleChange} placeholder="Username Name" type="text" id="username" className="form-control form-control-lg" required />
                      </div>

                    </div>
                  </div>

                  <div className="row">

                    <div className="col-md-12 mb-4">

                      <h6 className="mb-2 pb-1">Gender: </h6>

                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                          value="option1" checked />
                        <label className="form-check-label" for="femaleGender">Female</label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                          value="option2" />
                        <label className="form-check-label" for="maleGender">Male</label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                          value="option3" required />
                        <label className="form-check-label" for="otherGender">Other</label>
                      </div>

                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">

                      <div className="form-outline">
                        {errors.email && <span>{errors.email}</span>}
                        <input placeholder="Email" name="email" value={email} onChange={handleChange} type="email" id="emailAddress" className="form-control form-control-lg" required />
                      </div>

                    </div>
                    <div className="col-md-6 mb-4 pb-2">

                      <div className="form-outline">
                        {errors.phone && <span>{errors.phone}</span>}
                        <input placeholder="Phone Number" name="phone" value={phone} onChange={handleChange} type="tel" id="phoneNumber" className="form-control form-control-lg" required />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">

                      <div className="form-outline">
                        {errors.password && <span>{errors.password}</span>}
                        <input name="password" value={password} onChange={handleChange} placeholder="Password" type="password" id="password" className="form-control form-control-lg" required />
                      </div>

                    </div>
                    <div className="col-md-6 mb-4 pb-2">

                      <div className="form-outline">
                        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                        <input name="confirmPassword" value={confirmPassword} onChange={handleChange} placeholder="Re-Password" type="password" id="repassword" className="form-control form-control-lg" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                  </div>
                  <div className="mt-1 text-center">
                    <p>Already Have An Account? <a href="/login">Login</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;