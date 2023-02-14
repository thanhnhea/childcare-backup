import React from "react";

const ResetPassword = () => {
    return (
        <section className="vh-100 gradient-custom">
        <div className="container-fluid py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-md-9">
                    <div className="card shadow-2-strong card-registration" >
                        <div className="card-body p-4 p-md-5">
                            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Enter OTP</h3>
                            <form>
                                <div className="container height-100 d-flex justify-content-center align-items-center">
                                    <div className="position-relative">
                                        <div className="card p-2 text-center">
                                            <h6>Please enter the one time password to verify your account</h6>
                                            <div> <span>A code has been sent to</span> <small>demo@gmail.com</small> </div>
                                            <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2">
                                                <input className="m-2 text-center form-control rounded" type="text"
                                                    id="first" maxlength="1" /> <input
                                                    className="m-2 text-center form-control rounded" type="text" id="second"
                                                    maxlength="1" /> <input className="m-2 text-center form-control rounded"
                                                    type="text" id="third" maxlength="1" /> <input
                                                    className="m-2 text-center form-control rounded" type="text" id="fourth"
                                                    maxlength="1" /> <input className="m-2 text-center form-control rounded"
                                                    type="text" id="fifth" maxlength="1" /> <input
                                                    className="m-2 text-center form-control rounded" type="text" id="sixth"
                                                    maxlength="1" /> </div>
                                            <div className="mt-4"> <button
                                                    className="btn btn-danger px-4 validate">Validate</button> </div>
                                        </div>
                                        <div className="card-2">
                                            
                                        </div>
                                    </div>
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

export default ResetPassword;