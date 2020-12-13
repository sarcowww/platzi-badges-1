import React from 'react'

import Modal from './Modal';

function DeleteBadgeModal(props){
    return <Modal isOpen={props.isOpen} onClose={props.onCloseModal}>
        <div className='DeleteBadgeModal'>
            <h1>ARE YOU SURE?</h1>
            <p>You are about to delete this Badge.</p>
            <div>
                <button onClick={props.onDeleteBadge} className='btn btn-danger'>Delete</button>
                <button onClick={props.onClose} className='btn btn-primary'>Cancel</button>
            </div>
        </div>
    </Modal>
}

export default DeleteBadgeModal;