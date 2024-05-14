import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import faixa from '../../assets/images/faixa.webp'

export default function Faixa(){
    return (
        <Swiper
            spaceBetween={30}
            loop={true}
            autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            }}
            breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
            }}
            modules={[Autoplay]}
            className="mySwiper !py-3 bg-[#1a1717] "
        >
            <SwiperSlide>
                <img 
                    src={faixa} 
                    alt="logo da empresa morgo" 
                    className='w-fit mx-auto md:mx-0'
                />
            </SwiperSlide>

            <SwiperSlide>
                <img 
                    src={faixa} 
                    alt="logo da empresa morgo" 
                    className='w-fit mx-auto md:mx-0'
                />
            </SwiperSlide>

            <SwiperSlide>
                <img 
                    src={faixa} 
                    alt="logo da empresa morgo" 
                    className='w-fit mx-auto md:mx-0'
                />
            </SwiperSlide>

            <SwiperSlide>
                <img 
                    src={faixa} 
                    alt="logo da empresa morgo" 
                    className='w-fit mx-auto md:mx-0'
                />
            </SwiperSlide>

            <SwiperSlide>
                <img 
                    src={faixa} 
                    alt="logo da empresa morgo" 
                    className='w-fit mx-auto md:mx-0'
                />
            </SwiperSlide>

            <SwiperSlide>
                <img 
                    src={faixa} 
                    alt="logo da empresa morgo" 
                    className='w-fit mx-auto md:mx-0'
                />
            </SwiperSlide>
        </Swiper>
    )
}