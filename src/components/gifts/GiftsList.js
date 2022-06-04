import React from 'react';
import { Gift } from './Gift';

export const GiftsList = ({ gifts }) => {
  return (
    <div>
        <ul>
            {
                gifts.map(gift => (
                    <Gift key={gift.id} {...gift} />
                ))
            }
        </ul>
    </div>
  )
}