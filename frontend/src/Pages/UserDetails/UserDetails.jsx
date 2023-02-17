import React from "react";


const UserDetails = () =>{
    return (

        <div className="container snippet">
    <div className="row">
          <div className="col-md-10">
            <h1>User Profile</h1>
        </div>

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
                                <input type="text" className="form-control" name="first_name" id="first_name" placeholder="full name" title="enter your first name if any."/>
                            </div>
                        </div>


                        <br></br>
                        <div className="form-group">
                            
                            <div className="col-md-12">
                                <input type="text" className="form-control" name="d.o.b" id="d.o.b" placeholder="enter you d.o.b" pattern="/^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/"/>
                            </div>
                        </div>
                     
          
                        <br></br>
                        <div className="form-group"> 
                          
                            <div className="col-md-12">
                            <input type="text" className="form-control" pattern="(\+84|0)\d{9,10}" placeholder="enter your phone number" />
                            </div>
                        </div>


                        <br></br>
                        <div className="form-group">
                            <div className="col-md-12">
                            <input type="text" className="form-control" pattern="(\1|2|3|4|5|6|7|8|9|0)\d{9,12}" placeholder="enter your identity card number" />
                            </div>
                        </div>
                      

                        <br></br>
                        <div className="form-group">
                          
                            <div className="col-md-12">
                            <input type="email" className="form-control" required id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" size="30" placeholder="you@gmail.com"/>
                            </div>
                        </div>   


                        <br></br>                                    
                        <div className="form-group">
                          
                            <div className="col-md-12">
                                <input type="address" className="form-control" name="address" id="address" placeholder="enter your address" title="enter your password."/>
                            </div>
                        </div>
                       

                        <br></br>
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