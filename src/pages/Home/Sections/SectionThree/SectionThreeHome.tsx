
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export default function SectionThreeHome() {
    return (
       <section className='py-20'>
            <div className="container mx-auto px-5 md:px-10 xl:px-16 ">
                <div className="flex justify-between">
                    <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl uppercase">
                        obras em que <h2 className="nohemiBold">estamos</h2>
                    </h2>

                    <span className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl uppercase">
                        20 <br />
                        24
                    </span>
                </div>
                
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                type: 'fraction',
                }}
                navigation={true}breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                    
                    1400: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                      },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper h-auto !px-5 md:!px-10 !py-20 swiperHome"
            >
                <SwiperSlide className='!h-[400px] w-[200px] bg-red-600 '>Slide 1</SwiperSlide>
                <SwiperSlide className='!h-[400px] w-[200px] bg-yellow-400 '>Slide 2</SwiperSlide>
                <SwiperSlide className='!h-[400px] w-[200px] bg-purple-500 '>Slide 3</SwiperSlide>
                <SwiperSlide className='!h-[400px] w-[200px] bg-green-500 '>Slide 4</SwiperSlide>
                <SwiperSlide className='!h-[400px] w-[200px] bg-yellow-950 '>Slide 5</SwiperSlide>
                <SwiperSlide className='!h-[400px] w-[200px] bg-teal-300 '>Slide 6</SwiperSlide>
                <SwiperSlide className='!h-[400px] w-[200px] bg-sky-500 '>Slide 7</SwiperSlide>
                <SwiperSlide className='!h-[400px] w-[200px] bg-indigo-700 '>Slide 8</SwiperSlide>
                <SwiperSlide className='!h-[400px] w-[200px] bg-rose-600 '>Slide 9</SwiperSlide>
            </Swiper>
       </section>
    )
}