import React from 'react';
import "./index.css"
const PopUp = ({ show, onClose, onYes, onNo }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <h3>Are you sure?</h3>
            <div className="d-flex flex-row">
                <button onClick={onYes}>Yes</button>
                <button onClick={onNo}>No</button>
            </div>
        </div>
    );
};

export default PopUp;