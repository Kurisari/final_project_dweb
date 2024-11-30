import React from 'react';
import './Home.css';
import 'swiper/css';
import Swiper from './Swiper';
import menu from '../assets/data/productos.json';

const Home = ({ addToCart }) => {
    const scrollToMenu = () => {
        document.querySelector('.menu-title').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="home-content">
            <header>
                <div className="container">
                    <h1>Bienvenido a Pollos "El Güero"</h1>
                    <p>Ofrecemos los mejores servicios para ti. ¡Contáctanos!</p>
                    <button className="btn-primary" onClick={scrollToMenu}>Explorar</button>
                </div>
            </header>
            <h3 className='menu-title'>Nuestro Menú</h3>
            <Swiper slides={menu} addToCart={addToCart}/>
        </div>
    );
};

export default Home;