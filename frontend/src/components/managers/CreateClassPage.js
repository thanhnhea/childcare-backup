import React, { useState, useEffect } from 'react';

const CreateClassPage = () => {
    const [className, setClassName] = useState('');
    const [ageRange, setAgeRange] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Make a request to the server to get a list of available services
        fetch('http://localhost:8080/api/service/all')
            .then(response => response.json())
            .then(data => setServices(data));
    }, []);

    const handleClassNameChange = (event) => {
        setClassName(event.target.value);
    };

    const handleAgeRangeChange = (event) => {
        setAgeRange(event.target.value);
    };

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleServiceChange = (event) => {
        // TODO: Handle service selection
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // TODO: Send form data to server to create a new class
    };

    return (
        <div>
            <h1>Create a New Class</h1>
            <form onSubmit={handleSubmit} className='m-5'>
                <div className="form-group">
                    <label htmlFor="className">Class Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="className"
                        value={className}
                        onChange={handleClassNameChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ageRange">Age Range</label>
                    <input
                        type="text"
                        className="form-control"
                        id="ageRange"
                        value={ageRange}
                        onChange={handleAgeRangeChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="startDate"
                        value={startDate}
                        onChange={handleStartDateChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="endDate">End Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="endDate"
                        value={endDate}
                        onChange={handleEndDateChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={handleDescriptionChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="services">Services</label>
                    <select
                        multiple
                        className="form-control"
                        id="services"
                        onChange={handleServiceChange}
                        required
                    >
                        {services.map(service => (
                            <option key={service.id} value={service.id}>{service.serviceTitle}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Save</button>
            </form>
        </div>
    );
}
export default CreateClassPage; 