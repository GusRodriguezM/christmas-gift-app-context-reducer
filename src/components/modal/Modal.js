import React, { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';

import './Modal.css';

export const Modal = ({ title, children }) => {

    const { showModal, setShowModal} = useContext(ModalContext);

    if(!showModal){
        return null;
    }

    const closeModal = () => {
        setShowModal(false);
    }
    
    return (
        <div className='modal' onClick={closeModal}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <h4 className='modal-title'>
                        {title}
                    </h4>
                </div>
                
                <div className='modal-body'>
                    {children}
                </div>

                <div className='modal-footer'>
                    <button
                        onClick={closeModal}
                        className='button'
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}