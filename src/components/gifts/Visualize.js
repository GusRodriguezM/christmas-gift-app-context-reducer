import React, { useContext } from 'react'
import { GiftContext } from '../../context/GiftContext';

export const Visualize = () => {
    const { gifts } = useContext(GiftContext);
    
    return (
        <div className='visualize'>
            {
                gifts.map(gift => (
                    <div key={gift.id} className='visualize__gift'>
                        <img style={{height: '100px', width: '100px'}} alt={gift.name} src={gift.image} />
                        <div className='visualize__gift--info'>
                            <h4>{gift.name} - ({gift.quantity})</h4>
                            <h4>To: {gift.person}</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}