import React, { useContext, useEffect, useState } from 'react';
import { deleteActiveGift } from '../../actions/activeGift';
import { addNewGift, duplicateGift, editGift } from '../../actions/gifts';
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
    const { option, activeGift, dispatchActiveGift } = useContext(ActiveGiftContext);
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

            if(option === 'edit'){
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
            }else if(option === 'duplicate'){
                const idx = gifts.findIndex(gift => gift.id === activeGift.id);

                console.log(idx);

                const giftToDuplicate = {
                    id: (+new Date()).toString(),
                    name: name,
                    quantity: quantity,
                    image: image,
                    person: person,
                    price: price,
                    total: quantity * price
                };

                dispatch( duplicateGift(idx, giftToDuplicate) );
                dispatchActiveGift( deleteActiveGift() );
                dispatchModal( closeModal() );
            }else{
                return;
            }

        }

    }

    const handleGetRandomGift = (e) => {
        e.preventDefault();
        const rand = Math.floor(Math.random() * defaultGifts.length);
        const randomGift = defaultGifts[rand];
        setFormValues({...formValues, name: randomGift.name});
    }

    const isFormValid = () => {
        if(name.length === 0 && quantity.length === 0 &&  image.length === 0 && person.length === 0 && price.length === 0)
            return true;
        else
            return false;
    }

    return (
        <form onSubmit={handleSubmit} className='form' >
            <input
                type='text'
                placeholder='Your gift'
                name='name'
                className='input'
                value={name}
                autoComplete='off'
                required
                onChange={handleInputChange}
            />

            <button onClick={handleGetRandomGift} className='button'>
                <span>Surprise!</span>
                <i className="fa-solid fa-shuffle"></i>
            </button>

            <input 
                type='number'
                placeholder='Quantity'
                name='quantity'
                className='input-number'
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
                className='input'
                value={image}
                onChange={handleInputChange}
                required
            />

            <input 
                type='text'
                placeholder='To:'
                name='person'
                className='input'
                value={person}
                autoComplete='off'
                onChange={handleInputChange}
                required
            />

            <input
                type='number'
                name='price'
                className='input-number'
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
                className={isFormValid() ? 'disabled' : 'button'}
                disabled={isFormValid()}
            >
                <span>Add a gift</span>
                <i className="fa-solid fa-circle-plus"></i>
            </button>
        </form>
    )
}