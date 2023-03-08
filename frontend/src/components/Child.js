import React from 'react';

const Child = ({ firstName, lastName, dob, status, gender, interest, needs, allergies, medications }) => {

    const age = calculateAge(dob);

    return (
        <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{firstName} {lastName}</h2>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit Profile</button>
            </div>
            <p className="text-gray-600">{dob} (Age: {age})</p>
            <p>Status: {status}</p>
            <h3 className="text-lg font-bold mt-4">Interest</h3>
            <p>{interest}</p>
            <h3 className="text-lg font-bold mt-4">Needs</h3>
            <p>{needs}</p>
            <h3 className="text-lg font-bold mt-4">Medical Information</h3>
            <p>Allergies: {allergies}</p>
            <p>Medications: {medications}</p>
        </div>
    );
};

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

export default Child;
