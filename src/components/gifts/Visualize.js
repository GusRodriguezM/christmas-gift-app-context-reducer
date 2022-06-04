import React, { useContext } from 'react'
import { GiftContext } from '../../context/GiftContext';

export const Visualize = () => {
    const { gifts } = useContext(GiftContext);
    
    return (
        <div>
            {
                gifts.map(gift => (
                    <div key={gift.id}>
                        <img style={{height: '100px', width: '100px'}} alt={gift.name} src={gift.image} />
                        {gift.name} - ({gift.quantity})
                        To: {gift.person}
                    </div>
                ))
            }
        </div>
    )
}