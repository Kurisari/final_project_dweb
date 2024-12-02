import React, { useEffect, useState } from 'react';
import './Home.css';
import 'swiper/css';
import Swiper from './Swiper';
import axios from 'axios';

const Home = ({ addToCart }) => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios.get('/api/productos')
            .then(response => {
                setMenu(response.data);
            })
            .catch(error => {
                console.error('Error fetching the menu:', error);
            });
    }, []);

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