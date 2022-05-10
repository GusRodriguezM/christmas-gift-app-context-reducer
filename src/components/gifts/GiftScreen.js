import React, { useEffect, useReducer } from 'react';

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