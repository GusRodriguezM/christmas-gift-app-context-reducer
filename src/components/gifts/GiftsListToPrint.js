import React, { useContext } from 'react';
import { GiftContext } from '../../context/GiftContext';

export const GiftsListToPrint = React.forwardRef((props, ref) => {
    
    const { gifts } = useContext(GiftContext);

    return (
        <>
            <div ref={ref}>
                {
                    gifts.map((gift) => (
                        <div key={gift.id}>
                            <img style={{height: '100px', width: '100px'}} alt={gift.name} src={gift.image} />

                            <div>
                                {gift.name} ({gift.quantity})
                                To: {gift.person}
                            </div>
                        </div>
                    ))
                }
            </div>
        </>

    )
});