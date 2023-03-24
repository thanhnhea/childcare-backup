import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import userService from "../../services/user.service";
import './UserDetails.css';

const UserDetails = () => {
    const userStorage = JSON.parse(localStorage.getItem('user'));
    const [user, setUser] = useState();

    const [updatedUser, setUpdatedUser] = useState({});
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const { register, handleSubmit, setValue, formState: { errors, isDirty } } = useForm(
        {
            defaultValues: {
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                phone: user.phone,
                address: user.address
            }
        }
    );

    const onSubmit = data => {
        console.log("submit")
    };

    const fetchUser = async () => {
        const response = await userService.getUserInfo(userStorage.username);
        const data = response.data;
        setUser(data);
        console.log(data);
    };

    useEffect(() => {
        fetchUser();
    }, []);


    const handleInputChange = e => {
        const { name, value } = e.target;
        if (value !== user[name]) {
            setUpdatedUser({ ...updatedUser, [name]: value });
        } else {
            const { [name]: _, ...rest } = updatedUser;
            setUpdatedUser(rest);
        }
    };



    return (
        <div className="container snippet">
            {
                successMessage && (
                    <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
                        <div class="toast" style="position: absolute; top: 0; right: 0;">
                            <div class="toast-header">
                                <img src="..." class="rounded mr-2" alt="...">
                                    <strong class="mr-auto">Bootstrap</strong>
                                    <small>11 mins ago</small>
                                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </img>
                            </div>
                            <div class="toast-body">
                                Hello, world! This is a toast message.
                            </div>
                        </div>
                    </div>
                )
            }

            <div class="container">
                <form class="form-horizontal" action="##" method="post" onSubmit={handleSubmit(onSubmit)}>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="text-center">
                                <img src="https://gocbao.net/wp-content/uploads/2020/10/avatar-trang-4.jpg" class="avatar img-circle img-thumbnail" alt="avatar">
                                    <h6>Upload your photo...</h6>
                                    <input type="file" class="text-center center-block file-upload">
                                    </input>
                                </img>
                            </div>
                        </div>
                        <div class="col-md-9 personal-info">
                            <h3>Personal info</h3>
                            <div class="form-group">
                                <label class="col-lg-3 control-label">First name:</label>
                                <div class="col-lg-8">
                                    <input class="form-control" type="text" {...register("firstName", { minLength: 2 })}>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-3 control-label">Last name:</label>
                                <div class="col-lg-8">
                                    <input class="form-control" type="text" {...register("lastname", { minLength: 2 })}>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-3 control-label">Date of birth:</label>
                                <div class="col-lg-8">
                                    <input class="form-control" type="text" name="d.o.b" id="d.o.b" placeholder="Enter your date of birth" pattern="/^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-3 control-label">Phone number:</label>
                                <div class="col-lg-8">
                                    <input class="form-control" type="text" pattern="(\+84|0)\d{9,10}" {...register("phonenumber", { minLength: 2 })}>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-3 control-label">Email:</label>
                                <div class="col-lg-8">
                                    <input class="form-control" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-3 control-label">Address:</label>
                                <div class="col-lg-8">
                                    <input class="form-control" type="address" {...register("lastname", { minLength: 2 })}>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-3 control-label"></label>
                                <div class="col-md-8">
                                    <button style={{ margin: 20 }} class="btn btn-lg btn-success" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> Save</button>
                                    <button style={{ margin: 20 }} class="btn btn-lg btn-dark" type="reset"><i class="glyphicon glyphicon-repeat"></i> Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}



export default UserDetails;