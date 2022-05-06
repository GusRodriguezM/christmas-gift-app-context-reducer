import React, { useReducer } from 'react';

import { GiftForm } from './GiftForm';
import { GiftsList } from './GiftsList';
import { giftsReducer } from '../../reducers/giftsReducer';
import { EmptyList } from './EmptyList';

const initialState = [
    {id: 1, name: 'socks', quantity: 1},
    {id: 2, name: 'ugly sweater', quantity: 1},
    {id: 3, name: 'Santa\'s hat', quantity: 1},
    {id: 4, name: 'snow sled', quantity: 1},
    {id: 5, name: 'snowball gun', quantity: 1}
];

export const GiftScreen = () => {

    const [gifts, dispatch] = useReducer(giftsReducer, initialState);
    
    const handleAddGift = (newGift) => {

        const duplicate = gifts.some(gift => gift.name.toLowerCase() === newGift.name.toLowerCase());

        if(duplicate){
            console.log('Please do not repeat the gift');
        }else{

            const action = {
                type: 'addTodo',
                payload: newGift
            }
    
            dispatch( action );
        }

    }
    
    const handleDeleteGift = (giftId) => {

        const action = {
            type: 'deleteTodo',
            payload: giftId
        }

        dispatch( action );
    }

    const handleCleanList = () => {
        
        const action = {
            type: 'cleanList'
        }

        dispatch( action );
    }
    
    return (
        <div className='list'>
            <h1>Gifts</h1>

            <GiftForm handleAddGift={handleAddGift} />

            {
                (gifts.length === 0)
                    ?   (<EmptyList />) 
                    :   (<GiftsList gifts={gifts} handleDeleteGift={handleDeleteGift} />)
            }
            

            <button
                onClick={handleCleanList}
            >
                Delete all
            </button>
        </div>
    )
}