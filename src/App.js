// FILE: App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AcercaDe from './components/AcercaDe';
import Categorias from './components/Categorias';
import Carrito from './components/Carrito';
import Footer from './components/Footer';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
    const [cartItems, setCartItems] = useState(0);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const addToCart = () => {
        setCartItems(cartItems + 1);
    };

    return (
        <Router>
            <Header cartItems={cartItems} />
            <div className="main-container">
                <Routes>
                    <Route path="/" element={<Home addToCart={addToCart} />} />
                    <Route path="/acerca-de" element={<AcercaDe />} />
                    <Route path="/categorias" element={<Categorias />} />
                    <Route path="/carrito" element={<PrivateRoute isAuthenticated={isAuthenticated}><Carrito /></PrivateRoute>} />
                    <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;