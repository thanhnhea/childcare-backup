import React, { useState } from "react";

const classes = [
    { id: 1, name: "Class A", ageRange: "2-4", service: "Full Time", numChildren: 15 },
    { id: 2, name: "Class B", ageRange: "4-6", service: "Full Time", numChildren: 10 },
    { id: 3, name: "Class C", ageRange: "2-4", service: "Part Time", numChildren: 20 },
    { id: 4, name: "Class D", ageRange: "4-6", service: "Part Time", numChildren: 18 },
];

const children = [
    { id: 1, firstName: "Alice", lastName: "Smith", dob: "2018-01-01", status: "Active" },
    { id: 2, firstName: "Bob", lastName: "Johnson", dob: "2017-02-01", status: "Inactive" },
    { id: 3, firstName: "Charlie", lastName: "Davis", dob: "2016-03-01", status: "Active" },
    { id: 4, firstName: "David", lastName: "Brown", dob: "2015-04-01", status: "Inactive" },
    { id: 5, firstName: "Ella", lastName: "Garcia", dob: "2014-05-01", status: "Active" },
];

const Tab2 = () => {
    const [ageRangeFilter, setAgeRangeFilter] = useState("");
    const [serviceFilter, setServiceFilter] = useState("");
    const [numChildrenFilter, setNumChildrenFilter] = useState("");
    const [filteredClasses, setFilteredClasses] = useState(classes);
    const [selectedChild, setSelectedChild] = useState(null);

    const handleAgeRangeFilterChange = (e) => {
        setAgeRangeFilter(e.target.value);
        filterClasses(e.target.value, serviceFilter, numChildrenFilter);
    };

    const handleServiceFilterChange = (e) => {
        setServiceFilter(e.target.value);
        filterClasses(ageRangeFilter, e.target.value, numChildrenFilter);
    };

    const handleNumChildrenFilterChange = (e) => {
        setNumChildrenFilter(e.target.value);
        filterClasses(ageRangeFilter, serviceFilter, e.target.value);
    };

    const filterClasses = (ageRange, service, numChildren) => {
        let filtered = classes;
        if (ageRange) {
            filtered = filtered.filter((c) => c.ageRange === ageRange);
        }
        if (service) {
            filtered = filtered.filter((c) => c.service === service);
        }
        if (numChildren) {
            filtered = filtered.filter((c) => c.numChildren === parseInt(numChildren));
        }
        setFilteredClasses(filtered);
    };

    const handleAssignClass = (c) => {
        if (selectedChild && selectedChild.status === "Inactive") {
            alert(`Assigned ${selectedChild.firstName} to ${c.name}`);
            setSelectedChild(null);
        } else {
            alert("Please select an inactive child to assign to a class");
        }
    };

    const handleSelectChild = (c) => {
        setSelectedChild(c);
    };

    return (
        <div className="container">
            <h2>Class List</h2>
            <div className="row mb-3">
                <div className="col-sm-3">
                    <label htmlFor="ageRangeFilter" className="form-label">
                        Age Range:
                    </label>
                    <select
                        id="ageRangeFilter"
                        className="form-select"
                        value={ageRangeFilter}
                        onChange={handleAgeRangeFilterChange}
                    >
                        <option value="">All</option>
                        <option value="2-4">2-4 years old</option>
                        <option value="4-6">4-6 years old</option>
                    </select>
                </div>
                <div className="col-sm-3">
                    <label htmlFor="serviceFilter" className="form-label">
                        Service:
                    </label>
                    <select
                        id="serviceFilter"
                        className="form-select"
                        value={serviceFilter}
                        onChange={handleServiceFilterChange}
                    >
                        <option value="">All</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                    </select>
                </div>
                <div className="col-sm-3">
                    <label htmlFor="numChildrenFilter" className="form-label">
                        Number of Children:
                    </label>
                    <select
                        id="numChildrenFilter"
                        className="form-select"
                        value={numChildrenFilter}
                        onChange={handleNumChildrenFilterChange}
                    >
                        <option value="">All</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="18">18</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
            <div className="row">
                {filteredClasses.map((c) => (
                    <div className="col-sm-3 mb-3" key={c.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{c.name}</h5>
                                <p className="card-text">
                                    Age Range: {c.ageRange}<br />
                                    Service: {c.service}<br />
                                    Number of Children: {c.numChildren}
                                </p>
                                <button className="btn btn-primary" onClick={() => handleAssignClass(c)}>
                                    Assign Child
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <hr />
            <h2>Child List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Status</th>
                        <th scope="col">Assign to Class</th>
                    </tr>
                </thead>
                <tbody>
                    {children.map((c) => (
                        <tr key={c.id}>
                            <td>{c.firstName}</td>
                            <td>{c.lastName}</td>
                            <td>{c.dob}</td>
                            <td>{c.status}</td>
                            <td>
                                {c.status === "Inactive" ? (
                                    <div>
                                        <input type="checkbox" onChange={() => handleSelectChild(c)} />
                                        <button
                                            className="btn btn-sm btn-primary ms-2"
                                            onClick={() => handleSelectChild(c)}
                                        >
                                            Assign
                                        </button>
                                    </div>
                                ) : (
                                    <span className="text-muted">N/A</span>
                                )}
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tab2;        