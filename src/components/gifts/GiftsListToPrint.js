import React, { useContext } from 'react';
import { GiftContext } from '../../context/GiftContext';

export const GiftsListToPrint = React.forwardRef(({ total }, ref) => {
    
    const { gifts } = useContext(GiftContext);

    return (
        <>
            <div ref={ref} className='print'>
                {
                    gifts.map((gift) => (
                        <div key={gift.id} className='print__list'>
                            <img className='print__list--image' alt={gift.name} src={gift.image} />

                            <div className='print__list--info'>
                                <h4>Gift: {gift.name}</h4>
                                <h4>To: {gift.person}</h4>
                                <h4>Quantity: {gift.quantity}</h4>
                                <h4>Price: {gift.price}</h4>
                                <h4>Subtotal: {gift.total}</h4>
                            </div>
                        </div>
                    ))
                }

                <div className='print__total'>
                    <h1>{`Total: ${total}`}</h1>
                </div>
            </div>
        </>

    )
});