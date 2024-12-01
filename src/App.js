import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AcercaDe from './components/AcercaDe';
import Categorias from './components/Categorias';
import Carrito from './components/Carrito';
import Admin from './components/Admin';
import Footer from './components/Footer';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const addToCart = (product) => {
        const productExists = cartItems.find(item => item.id === product.id);
        if (productExists) {
            setCartItems(cartItems.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    return (
        <Router>
            <Header cartItems={cartItems.length} />
            <div className="main-container">
                <Routes>
                    <Route path="/" element={<Home addToCart={addToCart} />} />
                    <Route path="/acerca-de" element={<AcercaDe />} />
                    <Route path="/categorias" element={<Categorias addToCart={addToCart} />} />
                    <Route path="/carrito" element={<PrivateRoute isAuthenticated={isAuthenticated}><Carrito cartItems={cartItems} setCartItems={setCartItems} /></PrivateRoute>} />
                    <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;