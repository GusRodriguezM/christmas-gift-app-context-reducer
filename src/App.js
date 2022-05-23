import React, { useReducer, useState } from 'react';

import { GiftScreen } from './components/gifts/GiftScreen';
import { GiftContext } from './context/GiftContext';

import { giftsReducer } from './reducers/giftsReducer';

import './App.css';
import { ModalContext } from './context/ModalContext';

const init = () => {
  return JSON.parse(localStorage.getItem('gifts')) || [];
}

export const App = () => {
  
  const [gifts, dispatch] = useReducer(giftsReducer, [], init);
  const [showModal, setShowModal] = useState(false);

  return (
    <GiftContext.Provider value={{
      gifts,
      dispatch
    }} >
      <ModalContext.Provider value={{showModal, setShowModal}}>
        <div className='App'>
          <GiftScreen />
        </div>
      </ModalContext.Provider>
    </GiftContext.Provider>
  );
}