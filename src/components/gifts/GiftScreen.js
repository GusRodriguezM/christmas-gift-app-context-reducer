import React, { useReducer } from 'react';

import { GiftForm } from './GiftForm';
import { GiftsList } from './GiftsList';
import { giftsReducer } from '../../reducers/giftsReducer';

const initialState = [
    {id: 1, name: 'socks'},
    {id: 2, name: 'ugly sweater'},
    {id: 3, name: 'Santa\'s hat'},
    {id: 4, name: 'snow sled'},
    {id: 5, name: 'snowball gun'}
];

export const GiftScreen = () => {

    const [gifts, dispatch] = useReducer(giftsReducer, initialState);
    
    const handleAddGift = (newGift) => {

        const action = {
            type: 'addTodo',
            payload: newGift
        }

        dispatch( action );
        
    }
    
    const handleDeleteGift = (giftId) => {

        const action = {
            type: 'deleteTodo',
            payload: giftId
        }

        dispatch( action );
    }
    
    return (
        <div className='list'>
            <h1>Gifts</h1>
            <GiftForm handleAddGift={handleAddGift} />
            <GiftsList gifts={gifts} handleDeleteGift={handleDeleteGift} />
        </div>
    )
}