import React, { useContext } from 'react';
import { deleteActiveGift } from '../../actions/activeGift';
import { closeModal } from '../../actions/modal';
import { ActiveGiftContext } from '../../context/ActiveGiftContext';
import { ModalContext } from '../../context/ModalContext';

import './Modal.css';

export const Modal = ({ title, children }) => {

    const { statusModal, dispatchModal } = useContext(ModalContext);
    const { setOption, dispatchActiveGift } = useContext(ActiveGiftContext);

    if(!statusModal){
        return null;
    }

    const handleCloseModal = () => {
        dispatchModal( closeModal() );
        setOption('');
        dispatchActiveGift( deleteActiveGift() );
    }
    
    return (
        <div className='modal' onClick={handleCloseModal}>
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
                        onClick={handleCloseModal}
                        className='button'
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}