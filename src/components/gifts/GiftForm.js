import React, { useContext, useEffect, useState } from 'react';
import { deleteActiveGift } from '../../actions/activeGift';
import { addNewGift, editGift } from '../../actions/gifts';
import { closeModal } from '../../actions/modal';
import { ActiveGiftContext } from '../../context/ActiveGiftContext';
import { GiftContext } from '../../context/GiftContext';
import { ModalContext } from '../../context/ModalContext';

import { defaultGifts } from '../../helpers/defaultGifts';

const initValues = {
    name: '',
    quantity: '',
    image: '',
    person: '',
    price: ''
}

export const GiftForm = () => {

    const { gifts, dispatch } = useContext(GiftContext);
    const { activeGift, dispatchActiveGift } = useContext(ActiveGiftContext);
    const { dispatchModal } = useContext(ModalContext);

    const [formValues, setFormValues] = useState(initValues);
    
    const { name, quantity, image, person, price } = formValues;

    useEffect(() => {
      activeGift ? setFormValues(activeGift) : setFormValues(initValues);
    }, [activeGift]);

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(activeGift);

        if(!activeGift){

            const newGift = {
                id: (+new Date()).toString(),
                name: name,
                quantity: quantity,
                image: image,
                person: person,
                price: price,
                total: quantity * price
            }
    
            const duplicate = gifts.some(gift => gift.name.toLowerCase() === newGift.name.toLowerCase());
    
            if(duplicate){
                console.log('Please do not repeat the gift');
            }else{
                dispatch( addNewGift(newGift) );
            }
    
            setFormValues(initValues);
            dispatchModal( closeModal() );
            

        }else{

            const giftToEdit = {
                id: activeGift.id,
                name: name,
                quantity: quantity,
                image: image,
                person: person,
                price: price,
                total: quantity * price
            };

            dispatch( editGift(giftToEdit) );
            dispatchActiveGift( deleteActiveGift() );
            dispatchModal( closeModal() );
        }

    }

    const handleGetRandomGift = (e) => {
        e.preventDefault();
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

            <input
                type='number'
                name='price'
                placeholder='Price'
                value={price}
                autoComplete='off'
                min={1}
                max={9999}
                minLength={1}
                maxLength={3}
                required
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