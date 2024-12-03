import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay";
import './Swiper.css';
import { useState } from 'react';

const SwiperComponent = ({ slides, addToCart }) => {
    const [addedProductId, setAddedProductId] = useState(null);

    const handleAddToCart = (product) => {
        addToCart(product); 
        setAddedProductId(product.id); 
        setTimeout(() => setAddedProductId(null), 500); 
    };

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
            }}
            loop
            navigation
            pagination={{ clickable: true }}
        >
            {slides.map((menu) => (
                <SwiperSlide key={menu.id}>
                    <div className="slide">
                        <img src={require(`../assets/${menu.image}`)} alt={menu.title} />
                        <h3>{menu.name}</h3>
                        <p>{menu.description}</p>
                        <p>${menu.price}</p>
                        <button
                            onClick={() => handleAddToCart(menu)}
                            className={`swiper-add-cart ${addedProductId === menu.id ? 'swiper-added' : ''}`}
                        >
                            {addedProductId === menu.id ? 'Agregado' : 'Agregar al carrito'}
                        </button>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperComponent;
