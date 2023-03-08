import { Link } from 'react-router-dom';

function ChildCard({ child }) {
    const { firstName, lastName, dob, status } = child;

    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{firstName} {lastName}</h5>
                    <p className="card-text">{calculateAge(child.dateOfBirth)} years old</p>
                    <p className="card-text">Status: {status}</p>
                </div>
            </div>
        </div>
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

export default ChildCard;
