import React from 'react';

export const Gift = ({ id, name, quantity, image, person, handleDeleteGift }) => {
    return (
        <div>

            <img style={{height: '100px', width: '100px'}} alt={name} src={image} />

            {name}
            {quantity}
            {person}
            

            <button
                onClick={() => handleDeleteGift(id)}
            >
                Delete
            </button>
        </div>
    )
}