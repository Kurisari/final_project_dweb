import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import AcercaDe from './components/AcercaDe';
import Categorias from './components/Categorias';
import Carrito from './components/Carrito';

function App() {
  const [cartItems, setCartItems] = useState(0);

  // Función para agregar al carrito
  const addToCart = () => {
    setCartItems(cartItems + 1);
  };
  return (
    <Router>
      <Header cartItems={cartItems}/>
      <Routes>
        <Route path='/' element={<Home addToCart={addToCart} />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
