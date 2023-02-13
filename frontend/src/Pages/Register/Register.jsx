import "./Register.css"
import React from 'react';
const Register = () => {
return (
    <section classNameName="vh-100 gradient-custom">
    <div classNameName="container-fluid py-5 h-100">
      <div classNameName="row justify-content-center align-items-center h-100">
        <div classNameName="col-md-9">
          <div className="card shadow-2-strong card-registration" >
            <div className="card-body p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Registration Form</h3>
              <form>
  
                <div className="row">
                  <div className="col-md-6 mb-4">
  
                    <div className="form-outline">
                      <input placeholder="First Name" type="text" id="firstName" className="form-control form-control-lg" />                     
                    </div>
  
                  </div>
                  <div classNameName="col-md-6 mb-4">
  
                    <div className="form-outline">
                      <input placeholder="Last Name" type="text" id="lastName" className="form-control form-control-lg" />                       
                    </div>
  
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-md-6 mb-4 d-flex align-items-center">
  
                    <div className="form-outline datepicker w-100">
                      <h6 className="mb-2 pb-1">Birthday: </h6>
                      <input placeholder="Birthday" type="date" className="form-control form-control-lg" id="birthdayDate" />         
                    </div>
  
                  </div>
                  <div className="col-md-6 mb-4">
  
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
                        value="option3" />
                      <label className="form-check-label" for="otherGender">Other</label>
                    </div>
  
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">
  
                    <div className="form-outline">
                      <input placeholder="Email" type="email" id="emailAddress" className="form-control form-control-lg" />                  
                    </div>
  
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
  
                    <div className="form-outline">
                      <input placeholder="Phone Number" type="tel" id="phoneNumber" className="form-control form-control-lg" />                
                    </div>
                  </div>
                </div>  

                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">
  
                    <div className="form-outline">
                      <input placeholder="Password" type="password" id="password" className="form-control form-control-lg" />                  
                    </div>
  
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
  
                    <div className="form-outline">
                      <input placeholder="Re-Password" type="password" id="repassword" className="form-control form-control-lg" />                
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