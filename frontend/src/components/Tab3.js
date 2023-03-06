import React, { useState } from 'react';

const Tab3 = () => {
    const [bookedServices, setBookedServices] = useState([
        {
            id: 1,
            serviceName: 'Service A',
            date: '2023-04-01',
            status: 'Pending',
        },
        {
            id: 2,
            serviceName: 'Service B',
            date: '2023-04-02',
            status: 'Approved',
        },
        {
            id: 3,
            serviceName: 'Service C',
            date: '2023-04-03',
            status: 'Denied',
        },
    ]);

    const handleApprove = (id) => {
        const updatedServices = bookedServices.map((service) =>
            service.id === id ? { ...service, status: 'Approved' } : service
        );
        setBookedServices(updatedServices);
    };

    const handleDeny = (id) => {
        const updatedServices = bookedServices.map((service) =>
            service.id === id ? { ...service, status: 'Denied' } : service
        );
        setBookedServices(updatedServices);
    };

    return (
        <div className="flex justify-center">
            <h1> Booking Services </h1>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Service Name</th>
                        <th className="px-4 py-2">Date</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bookedServices.map((service) => (
                        <tr key={service.id}>
                            <td className="border px-4 py-2">{service.id}</td>
                            <td className="border px-4 py-2">{service.serviceName}</td>
                            <td className="border px-4 py-2">{service.date}</td>
                            <td className="border px-4 py-2">{service.status}</td>
                            <td className="border px-4 py-2">
                                {service.status === 'Pending' && (
                                    <div>
                                        <button
                                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                                            onClick={() => handleApprove(service.id)}
                                        >
                                            Approve
                                        </button>
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={() => handleDeny(service.id)}
                                        >
                                            Deny
                                        </button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tab3;
