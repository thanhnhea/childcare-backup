import React, { useState } from 'react';
import './ConfirmSubmit.css';

const ConfirmSubmit = () => {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleSubmit = () => {
        // handle form submission here
        alert('Form submitted!');
        setShowConfirm(false);
    }

    return (
        <div>
            <button onClick={() => setShowConfirm(true)}>Submit</button>
            {showConfirm && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Are you sure you want to submit?</p>
                        <button onClick={handleSubmit}>Yes</button>
                        <button onClick={() => setShowConfirm(false)}>No</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ConfirmSubmit;
