import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import userService from "../../services/user.service";

const EditServiceDetail = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        async function fetchData() {
            const data = userService.getServiceDetail(id);
            setService(data);
        }
        fetchData();

    }, [])


    const handleSubmit = async (event) => {
        event.preventDefault();



    };

    if (!service) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Edit Service</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Service Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <textarea
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description" className="form-label">
                        Price
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </form>
        </div>
    );
};

export default EditServiceDetail;
