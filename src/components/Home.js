import React from 'react';
import './Home.css';
import 'swiper/css';
import Swiper from './Swiper';
import menu from '../assets/data/menu.json';

const Home = () => {
    return (
        <div className="home-content">
            <header>
                <div className="container">
                    <h1>Bienvenido a Pollos "El Güero"</h1>
                    <p>Ofrecemos los mejores servicios para ti. ¡Contáctanos!</p>
                    <button className="btn-primary">Explorar</button>
                </div>
            </header>
            <Swiper slides={menu} />
        </div>
    );
};

export default Home;