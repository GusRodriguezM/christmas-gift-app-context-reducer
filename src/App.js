import React, { useReducer, useState } from 'react';

import { GiftContext } from './context/GiftContext';
import { ModalContext } from './context/ModalContext';
import { ActiveGiftContext } from './context/ActiveGiftContext';

import { giftsReducer } from './reducers/giftsReducer';
import { modalReducer } from './reducers/modalReducer';
import { activeGiftReducer } from './reducers/activeGiftReducer';

import { GiftScreen } from './components/gifts/GiftScreen';
import './App.css';

const init = () => {
  return JSON.parse(localStorage.getItem('gifts')) || [];
}

export const App = () => {
  
  const [gifts, dispatch] = useReducer(giftsReducer, [], init);
  const [activeGift, dispatchActiveGift] = useReducer(activeGiftReducer, null);
  const [statusModal, dispatchModal] = useReducer(modalReducer, false);
  const [option, setOption] = useState('');

  return (
    <GiftContext.Provider value={{gifts, dispatch}}>
      <ActiveGiftContext.Provider value={{activeGift, dispatchActiveGift, option, setOption}}>
        <ModalContext.Provider value={{statusModal, dispatchModal}}>
          <div className='App'>
            <GiftScreen />
          </div>
        </ModalContext.Provider>
      </ActiveGiftContext.Provider>
    </GiftContext.Provider>
  );
}