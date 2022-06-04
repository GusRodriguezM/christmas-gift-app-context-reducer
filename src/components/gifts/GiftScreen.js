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
import { Visualize } from './Visualize';

export const GiftScreen = () => {

    const { gifts, dispatch } = useContext(GiftContext);
    const { modalType, setModalType, dispatchModal } = useContext(ModalContext);
    const [total, setTotal] = useState(0);
    
    const handleCleanList = () => {
        dispatch( cleanList() );
    }

    const handleOpenModal = () => {
        dispatchModal( openModal() );
    }

    const handleOpenModalToVisualize = () => {
        setModalType('visualize');
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

            <Modal title={modalType === 'form' ? 'Form' : 'Visualize'}>
                {
                    modalType === 'form' ? (
                        <GiftForm />
                    ) : (
                        <Visualize />
                    )
                }
            </Modal>

            {
                (gifts.length === 0)
                    ?   (<EmptyList />) 
                    :   (<GiftsList gifts={gifts} />)
            }

            <div>
                {`Total: ${total}`}
            </div>
            

            <button
                onClick={handleCleanList}
            >
                Delete all
            </button>

            <button
                onClick={handleOpenModalToVisualize}
            >
                Visualize
            </button>

        </div>
    )
}