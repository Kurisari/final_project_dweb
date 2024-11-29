import React from 'react';
import './Header.css';
import logo from '../assets/img/logo.png';
import { useState } from 'react';
import cart from '../assets/img/cart.png'

const Header = () => {
    const [cartItems, setCartItems] = useState(0);
    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Logo de Pollos 'El Güero'" className="logo" />
                <h1>Pollos "El Güero"</h1>
            </div>
            <div className="links-container">
                <nav>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/servicios">Servicios</a></li>
                        <li><a href="/contacto">Contacto</a></li>
                    </ul>
                </nav>
                <a href="/carrito" className="cart-link">
                    <img src={cart} alt="Carrito" className="cart-icon" />
                    <span className="cart-count">{cartItems}</span>
                </a>
            </div>
        </header>
    );
};

export default Header;
