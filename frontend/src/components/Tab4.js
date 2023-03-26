import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
// import { array } from 'yargs';
import userService from '../services/user.service';

// {
//     id: 1,
//     serviceName: 'Service A',
//     date: '2023-04-01',
//     status: 'Pending',
// },
// {
//     id: 2,
//     serviceName: 'Service B',
//     date: '2023-04-02',
//     status: 'Approved',
// },
// {
//     id: 3,
//     serviceName: 'Service C',
//     date: '2023-04-03',
//     status: 'Denied',
// },

const Tab4 = () => {
    
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [serviceIdToDelete, setServiceIdToDelete] = useState(null);
    const [services, setServices] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchData() {
            const response = await userService.getAllService();
            setServices(response.data);
        }
        fetchData();
    }, [])

    const handleEdit = (c) => {
        navigate("/editservice/" + c.id)
    };
    const handleCreate = () => {
        navigate("/createServices/")
    }

    // const handleDelete = (service) => {
    //     userService.postDeleteService(service.id)
    //     try {
    //         setServiceIdToDelete(postId);
    //         setShowDeleteModal(true);
    //     } catch (error) {
    //         console.error("Error deleting service:", error);
    //         toast.error("Error deleting service. Please try again later.");
    //     }
    // };

    return (
        <Container>

            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleCreate()}
            >
                Create Service
            </button>
            <div className="flex justify-center mb-4">
                <h1> Services </h1>
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Service title</th>
                            <th className="px-4 py-2">Service Description</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Created date</th>
                            <th className="px-4 py-2">Updated date</th>
                            <th className="px-4 py-2">Category</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service) => (
                            <tr key={service.id}>
                                <td className="border px-4 py-2">{service.id}</td>
                                <td className="border px-4 py-2">{service.serviceTitle}</td>
                                <td className="border px-4 py-2">{service.serviceDetail}</td>
                                <td className="border px-4 py-2">{service.servicePrice}</td>
                                <td className="border px-4 py-2">{service.createdDate}</td>
                                <td className="border px-4 py-2">{service.updatedDate}</td>
                                <td className="border px-4 py-2">{service.category}</td>
                                <td className="border px-4 py-2">
                                    <div>
                                        <button
                                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                                            onClick={() => handleEdit(service)}
                                        >
                                            Edit
                                        </button>
                                        {/* <button
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={() => handleDelete(service)}
                                        >
                                            Delete
                                        </button> */}
                                    </div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {/* <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </Container>
    );
};

export default Tab4;
