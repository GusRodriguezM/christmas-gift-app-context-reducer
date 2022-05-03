import React from 'react';

export const Gift = ({ id, name, handleDeleteGift }) => {
    return (
        <div>
            {name}

            <button
                onClick={() => handleDeleteGift(id)}
            >
                Delete
            </button>
        </div>
    )
}