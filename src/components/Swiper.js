import { Navigation, Pagination, A11y, Autoplay} from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay";

import './Swiper.css';

const SwiperComponent = ({ slides, addToCart }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
            }}
            loop
            navigation
            pagination={{ clickable: true }}
        >
            {slides.map((menu) =>(
                <SwiperSlide>
                    <div className="slide">
                        <img src={require(`../assets/${menu.image}`)} alt={menu.title} />
                        <h3>{menu.name}</h3>
                        <p>{menu.description}</p>
                        <p>${menu.price}</p>
                        <button onClick={() => addToCart(menu)} className='add-cart'>Add to Cart</button>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperComponent;