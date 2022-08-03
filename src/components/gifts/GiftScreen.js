import React, { useState, useEffect, useContext, useRef } from 'react';

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
import { useReactToPrint } from 'react-to-print';
import { GiftsListToPrint } from '../gifts/GiftsListToPrint';

export const GiftScreen = () => {

    const { gifts, dispatch } = useContext(GiftContext);
    const { modalType, setModalType, dispatchModal } = useContext(ModalContext);
    const [total, setTotal] = useState(0);
    const componentRef = useRef();
    
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

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Gifts List'
    });

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

        <div className='gifts'>
            <h1 className='gifts__title'>Gifts</h1>

            <button
                onClick={handleOpenModal}
                className='button'
            >
                <span>Add Gift</span>
                <i className="fa-solid fa-circle-plus"></i>
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

            <div className='gifts__listToPrint'>
                <GiftsListToPrint ref={componentRef} total={total}/>
            </div>

            {
                (gifts.length === 0)
                    ?   (<EmptyList />) 
                    :   (<GiftsList gifts={gifts} />)
            }

            <div className='gifts__total'>
                <h1>
                    {`Total: ${total}`}
                </h1>
            </div>
            
            <div className='gifts__button-group'>
                <button
                    onClick={handleCleanList}
                    className={gifts.length === 0 ? 'disabled' : 'button'}
                    disabled={gifts.length === 0 ? true : false}
                >
                    <span>Delete all</span>
                    <i className="fa-solid fa-dumpster"></i>
                </button>

                <button
                    onClick={handleOpenModalToVisualize}
                    className={gifts.length === 0 ? 'disabled' : 'button'}
                    disabled={gifts.length === 0 ? true : false}
                >
                    <span>Visualize</span>
                    <i className="fa-solid fa-eye"></i>
                </button>

                <button
                    onClick={handlePrint}
                    className={gifts.length === 0 ? 'disabled' : 'button'}
                    disabled={gifts.length === 0 ? true : false}
                >
                    <span>Print</span>
                    <i className="fa-solid fa-print"></i>
                </button>
            </div>

        </div>
    )
}