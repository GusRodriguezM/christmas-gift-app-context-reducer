import React from 'react';

export const Gift = ({ id, name, quantity, handleDeleteGift }) => {
    return (
        <div>
            {name}
            {quantity}

            <button
                onClick={() => handleDeleteGift(id)}
            >
                Delete
            </button>
        </div>
    )
}