import React, { useContext } from 'react';
import { deleteActiveGift } from '../../actions/activeGift';
import { closeModal } from '../../actions/modal';
import { ActiveGiftContext } from '../../context/ActiveGiftContext';
import { ModalContext } from '../../context/ModalContext';

export const Modal = ({ title, children }) => {

    const { setModalType, statusModal, dispatchModal } = useContext(ModalContext);
    const { setOption, dispatchActiveGift } = useContext(ActiveGiftContext);
    
    const handleCloseModal = () => {
        dispatchModal( closeModal() );
        setOption('');
        setModalType('form');
        dispatchActiveGift( deleteActiveGift() );
    }
    
    if(!statusModal){
        return null;
    }

    return (
        <div className='modal' onClick={handleCloseModal}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>
                <div className='modal__content--header'>
                    <h3 className='modal__content--title'>
                        {title}
                    </h3>
                </div>
                
                <div className='modal__content--body'>
                    {children}
                </div>

                <div className='modal__content--footer'>
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