import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import authService from "../../services/auth.service";
import userService from "../../services/user.service";

const ServiceDetail = () => {

    const { id } = useParams();

    const [service, setService] = useState({});

    const [isUser, setIsUser] = useState(false);
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        async function fetchData() {
            const response = await userService.getServiceDetail(id);
            setService(response.data);
        }
        fetchData();

        const user = authService.getCurrentUser();
        if (user) {
            setIsUser(user.roles.includes("ROLE_USER"));
            setCurrentUser(user)
        }
    }, []);

    return (
        <div className="p-4" id={service.id}>
            <h3 className="text-lg font-medium">{service.serviceTitle}</h3>
            <p className="text-gray-600">{service.serviceDetail}</p>
            <div className="mt-2">
                <p className="font-medium">Price:</p>
                <p className="ml-2">${service.servicePrice}</p>
            </div>
            <div className="mt-2">
                <p className="font-medium">Created Date:</p>
                <p className="ml-2">{service.createdDate}</p>
            </div>

            {isUser && (
                <Link to={`/booking/${service.id}`} className="link-button">Book this Service</Link>
            )}


        </div>
    );
};

export default ServiceDetail;
