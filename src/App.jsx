import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { setNumberOfItems } from './features/cart/cartSlice.js';

function App() {
  const count = useSelector((state) => state.cart.numberOfItems);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(setNumberOfItems(count + 1));
  };

  return (
    <>
      <h1>Testing Redux Cart State</h1>
      <div className="card">
        <button onClick={handleAddItem}>{count} cart items</button>
      </div>
    </>
  );
}

export default App;
