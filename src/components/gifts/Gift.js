import React, { useContext } from 'react';
import { deleteGift } from '../../actions/gifts';
import { GiftContext } from '../../context/GiftContext';

export const Gift = ({ id, name, quantity, image, person, price, handleDuplicateGift }) => {

    const { gifts, dispatch } = useContext(GiftContext);

    const handleDeleteGift = () => {
        dispatch( deleteGift(id) );
    }

    return (
        <div>

            <img style={{height: '100px', width: '100px'}} alt={name} src={image} />

            {name}
            {person}
            ({quantity}) - {quantity * price}
            

            <button
                onClick={() => handleDuplicateGift(id)}
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