import { useState } from "react";

const Tab1 = () => {

    const [selectedChildren, setSelectedChildren] = useState([]);


    const items = [
        { firstName: 'John', lastName: 'Doe', dob: '01/01/1990', status: 'Assigned' },
        { firstName: 'Jane', lastName: 'Doe', dob: '02/02/1995', status: 'Inactive' },
        { firstName: 'Bob', lastName: 'Smith', dob: '03/03/2000', status: 'Assigned' },
        { firstName: 'Alice', lastName: 'Johnson', dob: '04/04/1992', status: 'Inactive' },
    ];

    const sortedItems = items.sort((b, a) => a.status.localeCompare(b.status));

    const handleCheckboxChange = (event, index) => {
        const isChecked = event.target.checked;
        const itemStatus = sortedItems[index].status;
        if (itemStatus === 'Inactive') {
            if (isChecked) {
                setSelectedChildren([...selectedChildren, index]);
            } else {
                setSelectedChildren(selectedChildren.filter((i) => i !== index));
            }
        }
    };

    const handleAssignChildren = () => {
        console.log(`Assigned children: ${selectedChildren}`);
        setSelectedChildren([]);
    };

    return (
        <div>
            <h3>Tab 1</h3>
            <ul className="list-group">
                {sortedItems.map((item, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id={`checkbox-${index}`}
                                checked={selectedChildren.includes(index)}
                                onChange={(event) => handleCheckboxChange(event, index)}
                                disabled={item.status !== 'Inactive'}
                            />
                            <label className="form-check-label" htmlFor={`checkbox-${index}`}>
                                {item.firstName} {item.lastName} ({item.dob}) - {item.status}
                            </label>
                        </div>
                        <button className="btn btn-primary" onClick={() => console.log(item)}>
                            View Details
                        </button>
                    </li>
                ))}
            </ul>
            <div className="mt-3 mb-4">
                <button className="btn btn-success" onClick={handleAssignChildren} disabled={!selectedChildren.length}>
                    Assign Children
                </button>
            </div>
        </div>
    );
};
export default Tab1;