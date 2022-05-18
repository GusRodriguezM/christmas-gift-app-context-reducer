import React, { useState, useEffect, useReducer } from 'react';

import { GiftForm } from './GiftForm';
import { GiftsList } from './GiftsList';
import { giftsReducer } from '../../reducers/giftsReducer';
import { EmptyList } from './EmptyList';
import { apiGifts } from '../../helpers/apiGifts';

const init = () => {
    return JSON.parse(localStorage.getItem('gifts')) || [];
}

export const GiftScreen = () => {

    const [gifts, dispatch] = useReducer(giftsReducer, [], init);
    const [total, setTotal] = useState(0);
    
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

    useEffect(() => {
        apiGifts.saveGifts(gifts)
            .then(console.log)
            .catch(console.log)
    }, [gifts]);

    useEffect(() => {
        let auxTotal = [];

        if(gifts.length !== 0){
            gifts.map(gift => auxTotal.push(gift.total));
            setTotal( auxTotal.reduce((prevVal, currVal) => prevVal + currVal) );
        }else{
            setTotal(0);
        }
      
    }, [gifts]);
    
    
    return (
        <div className='list'>
            <h1>Gifts</h1>

            <GiftForm handleAddGift={handleAddGift} />

            {
                (gifts.length === 0)
                    ?   (<EmptyList />) 
                    :   (<GiftsList gifts={gifts} handleDeleteGift={handleDeleteGift} />)
            }

            <div>
                {`Total: ${total}`}
            </div>
            

            <button
                onClick={handleCleanList}
            >
                Delete all
            </button>
        </div>
    )
}