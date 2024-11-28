import React from 'react';
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Home = () => {
    return (
        <div className="home-content">
            <h1>Bienvenido a Pollos "El Güero"</h1>
            <p>Ofrecemos los mejores servicios para ti. ¡Contáctanos!</p>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide><div className="slide">Servicio 1</div></SwiperSlide>
                <SwiperSlide><div className="slide">Servicio 2</div></SwiperSlide>
                <SwiperSlide><div className="slide">Servicio 3</div></SwiperSlide>
            </Swiper>
            <button className="btn-primary">Explorar</button>
        </div>
    );
};

export default Home;