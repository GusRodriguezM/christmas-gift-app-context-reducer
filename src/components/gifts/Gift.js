import React from 'react';

export const Gift = ({ id, name, quantity, image, person, price, handleDeleteGift }) => {
    return (
        <div>

            <img style={{height: '100px', width: '100px'}} alt={name} src={image} />

            {name}
            {person}
            ({quantity}) - {quantity * price}
            

            <button
                onClick={() => handleDeleteGift(id)}
            >
                Delete
            </button>
        </div>
    )
}