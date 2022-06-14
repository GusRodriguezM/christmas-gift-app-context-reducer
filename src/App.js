import React, { useReducer, useState } from 'react';

import { GiftContext } from './context/GiftContext';
import { ModalContext } from './context/ModalContext';
import { ActiveGiftContext } from './context/ActiveGiftContext';
import { AuthContext } from './context/AuthContext';

import { giftsReducer } from './reducers/giftsReducer';
import { modalReducer } from './reducers/modalReducer';
import { activeGiftReducer } from './reducers/activeGiftReducer';
import { authReducer } from './reducers/authReducer';

import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { AppRouter } from './routers/AppRouter';

const init = () => {
  return JSON.parse(localStorage.getItem('gifts')) || [];
}

const initUser = () => {
  return JSON.parse(localStorage.getItem('user')) || {logged: false};
}

export const App = () => {
  
  const [gifts, dispatch] = useReducer(giftsReducer, [], init);
  const [activeGift, dispatchActiveGift] = useReducer(activeGiftReducer, null);
  const [statusModal, dispatchModal] = useReducer(modalReducer, false);
  const [user, dispatchLogin] = useReducer(authReducer, {}, initUser);
  const [option, setOption] = useState('');
  const [modalType, setModalType] = useState('form');

  return (
    <GiftContext.Provider value={{gifts, dispatch}}>
      <ActiveGiftContext.Provider value={{activeGift, dispatchActiveGift, option, setOption}}>
        <ModalContext.Provider value={{statusModal, dispatchModal, modalType, setModalType}}>
          <AuthContext.Provider value={{user, dispatchLogin}}>
            <div className='App'>
              <Navbar />
              <AppRouter />
            </div>
          </AuthContext.Provider>
        </ModalContext.Provider>
      </ActiveGiftContext.Provider>
    </GiftContext.Provider>
  );
}