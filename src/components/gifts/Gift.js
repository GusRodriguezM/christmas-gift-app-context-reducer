import React, { useContext } from 'react';
import { deleteGift } from '../../actions/gifts';
import { openModal } from '../../actions/modal';
import { GiftContext } from '../../context/GiftContext';
import { ModalContext } from '../../context/ModalContext';

export const Gift = ({ id, name, quantity, image, person, price }) => {

    const { gifts, dispatch } = useContext(GiftContext);
    const { dispatchModal } = useContext(ModalContext);

    const handleDeleteGift = () => {
        dispatch( deleteGift(id) );
    }

    const handleEditGift = () => {
        dispatchModal( openModal() );
    }

    const handleDuplicateGift = () => {
        dispatchModal( openModal() );
    }

    return (
        <div>

            <img style={{height: '100px', width: '100px'}} alt={name} src={image} />

            {name}
            {person}
            ({quantity}) - {quantity * price}
            
            <button
                onClick={handleEditGift}
            >
                Edit
            </button>

            <button
                onClick={handleDuplicateGift}
            >
                Duplicate
            </button>

            <button
                onClick={handleDeleteGift}
            >
                Delete
            </button>

        </div>
    )
}