import React, { useReducer } from 'react';

import { GiftScreen } from './components/gifts/GiftScreen';
import { GiftContext } from './context/GiftContext';

import { giftsReducer } from './reducers/giftsReducer';

import './App.css';

const init = () => {
  return JSON.parse(localStorage.getItem('gifts')) || [];
}

export const App = () => {
  
  const [gifts, dispatch] = useReducer(giftsReducer, [], init);

  return (
    <GiftContext.Provider value={{
      gifts,
      dispatch
    }} >
      <div className='App'>
        <GiftScreen />
      </div>
    </GiftContext.Provider>
  );
}