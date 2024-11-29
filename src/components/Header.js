import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/img/logo.png';
import cart from '../assets/img/cart.png'

const Header = ({ cartItems }) => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Logo de Pollos 'El Güero'" className="logo" />
                <h1>Pollos "El Güero"</h1>
            </div>
            <div className="links-container">
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/acerca-de">Acerca de</Link></li>
                        <li><Link to="/categorias">Categorías</Link></li>
                    </ul>
                </nav>
                <Link to="/carrito" className="cart-link">
                    <img src={cart} alt="Carrito" className="cart-icon" />
                    <span className="cart-count">{cartItems}</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;
