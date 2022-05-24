import React, { useState, useEffect, useContext } from 'react';

import { GiftForm } from './GiftForm';
import { GiftsList } from './GiftsList';
import { EmptyList } from './EmptyList';
import { apiGifts } from '../../helpers/apiGifts';
import { Modal } from '../modal/Modal';
import { GiftContext } from '../../context/GiftContext';
import { ModalContext } from '../../context/ModalContext';
import { cleanList } from '../../actions/gifts';
import { openModal } from '../../actions/modal';

export const GiftScreen = () => {

    const { gifts, dispatch } = useContext(GiftContext);
    const { dispatchModal } = useContext(ModalContext);
    const [total, setTotal] = useState(0);
    
    const handleDuplicateGift = (id) => {
        console.log(id);
    }

    const handleCleanList = () => {
        dispatch( cleanList() );
    }

    const handleOpenModal = () => {
        dispatchModal( openModal() );
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
                onClick={handleOpenModal}
            >
                Add Gift
            </button>

            <Modal title='My modal'>
                <GiftForm />
            </Modal>

            {
                (gifts.length === 0)
                    ?   (<EmptyList />) 
                    :   (<GiftsList gifts={gifts} handleDuplicateGift={handleDuplicateGift} />)
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