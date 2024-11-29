import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Pollos "El Güero". Todos los derechos reservados.<br></br>Desarrollado por Cristian Aragón y Luis Fernando de Anda</p>
        </footer>
    );
};

export default Footer;
