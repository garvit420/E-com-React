
import './App.css';
import Products from './components/Products/Products';
import { useState } from 'react';

function App() {
  let [cart, setCart] = useState({});

  function increaseQuantity(product) {
    const newCart = { ...cart };

    if(!newCart[product.id]) {
      newCart[product.id] = {
        ...product,
        quantity: 0
      };
    }

    newCart[product.id].quantity++;
    setCart(newCart);
  }

  function decreaseQuantity(product) {
    const newCart = { ...cart };

    if(!newCart[product.id]) {
      return;
    }

    newCart[product.id].quantity--;

    if(newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }

    setCart(newCart);
  }

  return (
    <div className="App">
      <p>Cart: {Object.keys(cart).length}</p>
      <Products cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
    </div>
  );
}

export default App;
