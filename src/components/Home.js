import React, { useEffect, useState } from 'react';
import './Home.css';
import 'swiper/css';
import Swiper from './Swiper';
import axios from 'axios';

const Home = ({ addToCart }) => {
    const [menu, setMenu] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL || '/api';

    useEffect(() => {
        axios.get(`${apiUrl}/productos`)
            .then(response => {
                setMenu(response.data);
            })
            .catch(error => {
                console.error('Error fetching the menu:', error);
            });
    }, [apiUrl]);

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
            {menu.length >= 8 ? (
                    <Swiper slides={menu} addToCart={addToCart} />
                ) : (
                    <h6 className="home-loading">Cargando...</h6>
                )}
        </div>
    );
};

export default Home;