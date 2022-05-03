import './App.css';

const gifts = [
  {id: 1, name: 'socks'},
  {id: 2, name: 'ugly sweater'},
  {id: 3, name: 'Santa\'s hat'},
  {id: 4, name: 'snow sled'},
  {id: 5, name: 'snowball gun'},
];

export const App = () => {
  return (
    <div className='App'>

      <h1>Gifts</h1>

      {
        gifts.map(gift => (
          <ul key={gift.id}>
            {gift.name}
          </ul>
        ))
      }
    </div>
  );
}