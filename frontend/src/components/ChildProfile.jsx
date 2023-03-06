import React from 'react';
import Child from './Child';

const ChildProfile = () => {
    const child = {
        firstName: 'John',
        lastName: 'Doe',
        dob: '01/01/2015',
        status: 'Active',
        address: '123 Main Street, Anytown USA',
        allergies: 'Peanuts, Cats',
        medications: 'None'
    };

    return (
        <Child
            firstName={child.firstName}
            lastName={child.lastName}
            dob={child.dob}
            status={child.status}
            address={child.address}
            allergies={child.allergies}
            medications={child.medications}
        />
    );
}

const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
        age--;
    }
    return age;
}

export default ChildProfile;
