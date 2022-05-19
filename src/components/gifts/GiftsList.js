import React from 'react';
import { Gift } from './Gift';

export const GiftsList = ({ gifts, handleDeleteGift, handleDuplicateGift }) => {
  return (
    <div>
        <ul>
            {
                gifts.map(gift => (
                    <Gift key={gift.id} {...gift} handleDeleteGift={handleDeleteGift} handleDuplicateGift={handleDuplicateGift} />
                ))
            }
        </ul>
    </div>
  )
}