import React, { useContext } from 'react';
import { setActiveGift } from '../../actions/activeGift';
import { deleteGift } from '../../actions/gifts';
import { openModal } from '../../actions/modal';
import { ActiveGiftContext } from '../../context/ActiveGiftContext';
import { GiftContext } from '../../context/GiftContext';
import { ModalContext } from '../../context/ModalContext';

export const Gift = ({ id, name, quantity, image, person, price }) => {

    const { dispatch } = useContext(GiftContext);
    const { dispatchModal } = useContext(ModalContext);
    const { setOption, dispatchActiveGift } = useContext(ActiveGiftContext);

    const handleDeleteGift = () => {
        dispatch( deleteGift(id) );
    }

    const handleEditGift = () => {

        const giftToEdit = {
            id: id,
            name: name,
            quantity: quantity,
            image: image,
            person: person,
            price: price
        }

        dispatchActiveGift( setActiveGift(giftToEdit) );
        setOption('edit');
        dispatchModal( openModal() );
    }

    const handleDuplicateGift = () => {

        const giftToDuplicate = {
            id: id,
            name: name,
            quantity: quantity,
            image: image,
            person: person,
            price: price
        }

        dispatchActiveGift( setActiveGift(giftToDuplicate) );
        setOption('duplicate');
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