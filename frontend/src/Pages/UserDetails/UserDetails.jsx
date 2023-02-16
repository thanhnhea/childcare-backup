import React from "react";

const UserDetails = () =>{
    return (

        <div className="container snippet">
    <div className="row">
          <div className="col-md-10"><h1>User Profile</h1></div>
       
    </div>
    <div className="row">
          <div className="col-md-3">
              

      <div className="text-center">
        <img src="https://gocbao.net/wp-content/uploads/2020/10/avatar-trang-4.jpg" className="avatar img-circle img-thumbnail" alt="avatar"/>
        <h6>Upload your photo...</h6>
        <input type="file" className="text-center center-block file-upload"/>
      </div>           
      </div>

        <div className="col-md-9">
          
            <div className="tab-pane active" id="home">
            
                  <form className="form" action="##" method="post" id="registrationForm">
                     
                        <div className="form-group">
                          
                            <div className="col-md-12">
                                <label for="first_name">Full Name</label>
                                <input type="text" className="form-control" name="first_name" id="first_name" placeholder="full name" title="enter your first name if any."/>
                            </div>
                        </div>
                        <div className="form-group">
                            
                            <div className="col-md-12">
                              <label for="last_name">Date Of Birth</label>
                                <input type="text" className="form-control" name="last_name" id="last_name" placeholder="enter you d.o.b" title="enter your last name if any."/>
                            </div>
                        </div>
                     
          
                      
                        <div className="form-group">
                          
                            <div className="col-md-12">
                                <label for="phone">Phone</label>
                                <input type="text" className="form-control" name="phone" id="phone" placeholder="enter your phone number" title="enter your phone number if any."/>
                            </div>
                        </div>
            
                        <div className="form-group">
                            <div className="col-md-12">
                               <label for="mobile">Identity Card Number</label>
                                <input type="text" className="form-control" name="card" id="card" placeholder="enter identity card number" title="enter your mobile number if any."/>
                            </div>
                        </div>
                      
                     
                        <div className="form-group">
                          
                            <div className="col-md-12">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email."/>
                            </div>
                        </div>                                          
                        <div className="form-group">
                          
                            <div className="col-md-12">
                                <label for="password">Address</label>
                                <input type="password" className="form-control" name="password" id="password" placeholder="enter your address" title="enter your password."/>
                            </div>
                        </div>
                       
                   
                      <div className="form-group">
                           <div className="col-md-12">               
                                  <button style={{margin:20}} className="btn btn-lg btn-success" type="submit"><i className="glyphicon glyphicon-ok-sign"></i> Save</button>
                                   <button style={{margin:20}} className="btn btn-lg btn-dark" type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset</button>
                                   <button style={{margin:20}} className="btn btn-lg btn-primary" type="reset"><i className="glyphicon glyphicon-repeat"></i> Update</button>

                            </div>
                      </div>
                  </form>  
                </div>                                 
          </div>
        </div>
      
</div>
    );
}


export default UserDetails;