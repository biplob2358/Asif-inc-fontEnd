import React from 'react';

const DeleteModal = ({ title, message, closeModal, modalData, successDelete }) => {
    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successDelete(modalData)} htmlFor="delete-modal" className="btn btn-primary">Delete</label>
                        <button onClick={closeModal} className='btn btn-outline'>Cancle</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;