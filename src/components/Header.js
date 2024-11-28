import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Mi Empresa</h1>
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
