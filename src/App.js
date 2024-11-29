import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState(0);

  // Función para agregar al carrito
  const addToCart = () => {
    setCartItems(cartItems + 1);
  };
  return (
    <div className="App">
      <Header cartItems={cartItems}/>
      <Home addToCart={addToCart}/>
      <Footer />
    </div>
  );
}

export default App;
