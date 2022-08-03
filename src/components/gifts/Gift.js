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
        <div className='gift'>

            <img className='gift__image' alt={name} src={image} />

            <div className='gift__section'>
                <h3>
                    {name}
                </h3>
                <h3>
                    {person}
                </h3>
                <h3>
                    ({quantity}) - {quantity * price}
                </h3>
            </div>
            
            <div className='gift__button-group'>
                <button
                    onClick={handleEditGift}
                    className='button'
                >
                    <span>Edit</span>
                    <i className='fa-solid fa-pen-to-square'></i>
                </button>

                <button
                    onClick={handleDuplicateGift}
                    className='button'
                >
                    <span>Duplicate</span>
                    <i className="fa-solid fa-copy"></i>
                </button>

                <button
                    onClick={handleDeleteGift}
                    className='button'
                >
                    <span>Delete</span>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>

        </div>
    )
}