import React from 'react';

import { useState } from 'react';
import { GiftForm } from './GiftForm';
import { GiftsList } from './GiftsList';

export const GiftScreen = () => {

    const [gifts, setGifts] = useState([
        {id: 1, name: 'socks'},
        {id: 2, name: 'ugly sweater'},
        {id: 3, name: 'Santa\'s hat'},
        {id: 4, name: 'snow sled'},
        {id: 5, name: 'snowball gun'},
    ]);
    
    const handleAddGift = (newGift) => {
        setGifts([...gifts, newGift]);
    }
    
    const handleDeleteGift = (id) => {
        console.log(id);
        const auxGifts = gifts.filter(gift => gift.id !== id);
        setGifts(auxGifts);
    }
    
    console.log(gifts);

    return (
        <div className='list'>
            <h1>Gifts</h1>
            <GiftForm handleAddGift={handleAddGift} />
            <GiftsList gifts={gifts} handleDeleteGift={handleDeleteGift} />
        </div>
    )
}