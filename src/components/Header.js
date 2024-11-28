import React from 'react';
import './Header.css';
import logo from '../assets/img/logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
            <img src={logo} alt="Logo de Pollos 'El Güero'" className="logo" />
            <h1>Pollos "El Güero"</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/servicios">Servicios</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
