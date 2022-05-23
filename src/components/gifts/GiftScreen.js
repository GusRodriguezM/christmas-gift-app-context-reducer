import React, { useState, useEffect, useReducer, useContext } from 'react';

import { GiftForm } from './GiftForm';
import { GiftsList } from './GiftsList';
import { EmptyList } from './EmptyList';
import { apiGifts } from '../../helpers/apiGifts';
import { Modal } from '../modal/Modal';
import { GiftContext } from '../../context/GiftContext';

export const GiftScreen = () => {

    const { gifts, dispatch } = useContext(GiftContext);
    const [total, setTotal] = useState(0);
    const [show, setShow] = useState(false);
    
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

    const handleDuplicateGift = (id) => {
        console.log(id);
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

            <button
                onClick={() => setShow(true)}
            >
                Add Gift
            </button>

            <Modal show={show} title='My modal' onClose={() => setShow(false)} >
                <GiftForm handleAddGift={handleAddGift} />
            </Modal>

            {
                (gifts.length === 0)
                    ?   (<EmptyList />) 
                    :   (<GiftsList gifts={gifts} handleDeleteGift={handleDeleteGift} handleDuplicateGift={handleDuplicateGift} />)
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