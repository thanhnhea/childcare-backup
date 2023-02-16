import "./ChangePassword.css"
import React from 'react';
const ChangePasword = () => {
return (
 
    <section className="vh-100 gradient-custom">
      <div className="container-fluid py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-9">
            <div className="card shadow-2-strong card-registration" >
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Reset Password</h3>
                <form>
                 

                  <div className="row">
                    <div className="col-md-12 mb-4 pb-2">
    
                        <div className="form-outline">
                          <input placeholder="demo@gmail.com" type="text" id="email" className="form-control form-control-lg" readonly />                  
                        </div>
      
                      </div>         
                    <div className="col-md-12 mb-4 pb-2">
    
                      <div className="form-outline">
                        <input placeholder="New-Password" type="password" id="password" className="form-control form-control-lg" />                  
                      </div>
    
                    </div>
                    <div className="col-md-12 mb-4 pb-2">
    
                      <div className="form-outline">
                        <input placeholder="Re-Password" type="password" id="repassword" className="form-control form-control-lg" />                
                      </div>
                    </div>
                  </div>  
                  <div classNameName="text-center">
                    <button type="submit" className="btn btn-primary">Update</button>               
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

export default ChangePasword;