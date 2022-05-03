import { useState } from 'react';
import { useForm } from './hooks/useForm';
import './App.css';

export const App = () => {

  const [gifts, setGifts] = useState([
    {id: 1, name: 'socks'},
    {id: 2, name: 'ugly sweater'},
    {id: 3, name: 'Santa\'s hat'},
    {id: 4, name: 'snow sled'},
    {id: 5, name: 'snowball gun'},
  ]);

  const [formValues, handleInputChange, reset] = useForm({
    id: (+new Date()).toString(),
    name: ''
  });

  const { name } = formValues;

  const handleAddGift = (e) => {
    e.preventDefault();
    setGifts([...gifts, formValues]);
    reset();
  }

  console.log(gifts);

  return (
    <div className='App'>

      <div className='list'>
        <h1>Gifts</h1>

        <form onSubmit={handleAddGift}>
          <input
            type='text'
            placeholder='Your gift'
            name='name'
            value={name}
            autoComplete='off'
            onChange={handleInputChange}
          />

          <button
            type='submit'
          >
            Add a gift
          </button>
        </form>

        <ul>
          {
            gifts.map(gift => (
              <li key={gift.id}>
                {gift.name}
              </li>
            ))
          }
        </ul>

      </div>

    </div>
  );
}