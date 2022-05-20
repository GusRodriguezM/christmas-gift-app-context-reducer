import React from 'react';

import './Modal.css';

export const Modal = ({ show, title, children, onClose }) => {

    if(!show){
        return null;
    }
    
    return (
        <div className='modal' onClick={onClose}>
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
                        onClick={onClose} 
                        className='button'
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}