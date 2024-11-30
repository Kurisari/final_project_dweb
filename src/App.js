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
    const [cartItems, setCartItems] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const addToCart = (product) => {
        // Verificar si el producto ya está en el carrito
        const existingProduct = cartItems.find(item => item.id === product.id);
        if (existingProduct) {
            // Si el producto ya está en el carrito, solo actualizamos la cantidad
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            // Si el producto no está en el carrito, lo agregamos con cantidad 1
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
                    <Route path="/carrito" element={<PrivateRoute isAuthenticated={isAuthenticated}><Carrito cartItems={cartItems} /></PrivateRoute>} />
                    <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;