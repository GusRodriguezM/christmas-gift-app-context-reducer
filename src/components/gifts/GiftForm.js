import React from 'react';

import { useForm } from '../../hooks/useForm';

export const GiftForm = ({ handleAddGift }) => {

    const [formValues, handleInputChange, reset] = useForm({
        name: '',
        quantity: '',
        image: ''
    });
    
    const { name, quantity, image } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddGift({
            id: (+new Date()).toString(),
            name: name,
            quantity: quantity,
            image: image
        });
        reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Your gift'
                name='name'
                value={name}
                autoComplete='off'
                onChange={handleInputChange}
            />

            <input 
                type='number'
                placeholder='Quantity'
                name='quantity'
                value={quantity}
                min={1}
                max={100}
                minLength={1}
                maxLength={3}
                required
                onChange={handleInputChange}
            />

            <input 
                type='text'
                placeholder='Your image'
                name='image'
                value={image}
                onChange={handleInputChange}
            />

            <button
                type='submit'
                disabled={name === '' ? true : false}
            >
                Add a gift
            </button>
        </form>
    )
}