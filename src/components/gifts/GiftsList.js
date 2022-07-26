import React from 'react';
import { Gift } from './Gift';

export const GiftsList = ({ gifts }) => {
  return (
    <div className='giftsList'>
      {
        gifts.map(gift => (
            <Gift key={gift.id} {...gift} />
        ))
      }
    </div>
  )
}