import React, { useState } from 'react';

import { defaultGifts } from '../../helpers/defaultGifts';

export const GiftForm = ({ handleAddGift }) => {

    const [formValues, setFormValues] = useState({
        name: '',
        quantity: '',
        image: '',
        person: ''
    });
    
    const { name, quantity, image, person } = formValues;

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddGift({
            id: (+new Date()).toString(),
            name: name,
            quantity: quantity,
            image: image,
            person: person
        });
    }

    const handleGetRandomGift = () => {
        const rand = Math.floor(Math.random() * defaultGifts.length);
        const randomGift = defaultGifts[rand];
        setFormValues({...formValues, name: randomGift.name});
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

            <button onClick={handleGetRandomGift}>
                Surprise!
            </button>

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

            <input 
                type='text'
                placeholder='To:'
                name='person'
                value={person}
                autoComplete='off'
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