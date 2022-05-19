import React from 'react';

export const Gift = ({ id, name, quantity, image, person, price, handleDeleteGift, handleDuplicateGift }) => {
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
                onClick={() => handleDeleteGift(id)}
            >
                Delete
            </button>

        </div>
    )
}