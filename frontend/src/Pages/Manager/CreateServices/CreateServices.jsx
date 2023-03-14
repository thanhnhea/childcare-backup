import React, { useState, useEffect } from 'react';
import { CreateService } from '../../../services/auth-service';
import { useNavigate } from 'react-router-dom';


const CreateServices = () => {
  const [formData, setFormData] = useState({
    serviceTitle: '',
    createdDate: '',
    updatedDate: '',
    servicePrice: '',
    serviceDetail: ''
  });
  const [errors, setErrors] = useState({});

  const { serviceTitle, createdDate, updatedDate, servicePrice, serviceDetail} = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [message, setMessage] = useState();
  const [successful, setSuccessful] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here

    console.log("handle submit here");
    CreateService(
        serviceTitle, createdDate, updatedDate, servicePrice, serviceDetail
    ).then(
      response => {
        formHeader.textContent = "Create Services successfully";
        formHeader.style.color = "green";
        console.log(response);
      },
      error => {
          // This function will execute when the Promise is rejected with an error response
          formHeader.textContent = "Create Services failed";
          formHeader.style.color = "red";
          console.error(error);
      }
    );
  };

  const formHeader = document.querySelector("h3");

  useEffect(() => {
    const validateForm = () => {
      let errors = {};

      if (!serviceTitle) {
        errors.serviceTitle = '';
      }else if (!/^[a-zA-Z0-9\s]+$/.test(serviceTitle)) {
        errors.serviceTitle = 'Title can not contain special character.';
      }
      

       if (!servicePrice) {
        errors.servicePrice = '';
      } else if (!/^[0-9]+$/.test(servicePrice)) {
        errors.servicePrice = 'Service Price must only contain digits';
      }

      if (!serviceDetail) {
        errors.serviceDetail = '';
      }else if (!/^[a-zA-Z0-9\s]+$/.test(serviceDetail)) {
        errors.serviceDetail = 'Service Detail can not contain special character.';
      }

      setErrors(errors);
    };

    validateForm();
  }, [formData]);

  return (
    <section className="vh-100 gradient-custom">
      <div className="container-fluid py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-9">
            <div className="card shadow-2-strong card-registration" >
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Cretae Services</h3>
                <form onSubmit={handleSubmit}>

                  <div className="row">
                    <div className="col-md-12 mb-4">
                    

                      <div className="form-outline">
                        {errors.serviceTitle && <span style={{color : "red"}}>{errors.serviceTitle}</span>}
                        <input name="serviceTitle" value={serviceTitle} onChange={handleChange} placeholder="Service Title" type="text" id="ServiceTitle" className="form-control form-control-lg" required />
                      </div>

                    </div>

                    <div className="col-md-12 mb-4">

                      <div className="form-outline">
                        {errors.servicePrice && <span style={{color : "red"}}>{errors.servicePrice}</span>}
                        <input name="servicePrice" value={servicePrice} onChange={handleChange} placeholder="Service Price" type="text" id="servicePrice" className="form-control form-control-lg" required />
                      </div>

                    </div>
                    <div className="col-md-12 mt-4 mb-4">

                      <div className="form-outline">
                        {errors.serviceDetail && <span style={{color : "red"}}>{errors.serviceDetail}</span>}
                        <textarea style={{height:300}} name="serviceDetail" value={serviceDetail} onChange={handleChange} placeholder="Service Detail" type="text" id="serviceDetail" className="form-control form-control-lg" required />
                      </div>

                    </div>
                  </div>        
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
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

export default CreateServices;