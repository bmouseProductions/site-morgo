import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default function SectionFourHome() {
    return (
        <section className="bg-[#1a1717] bg-section-two">
            <div className="container mx-auto px-5 md:px-10 xl:px-16 py-20 !text-white">
                <div className='flex flex-col md:flex-row md:gap-10 md:justify-between md:items-center'>
                    <div className='md:max-w-[80%] 2xl:max-w-[60%] '>
                        <div>
                            <h2 className=" text-4xl sm:text-5xl lg:text-5xl xl:text-6xl uppercase">
                                Avaliações da 
                            </h2>
                            <h2 className='text-4xl sm:text-5xl lg:text-5xl xl:text-6xl uppercase nohemiBold'>morgo</h2> 
                        </div>
                        

                        <p className='mt-5 '>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. sequi voluptatum!. Ipsum earum odit temporibus rem inventore officiis illo sequi voluptatum! Eos cum accusamus ab sint corporis et rerum maior.
                        </p>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 md:w-20 md:h-20 mx-auto hidden md:block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                    </svg>

                </div>

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper mt-10"
                >
                    <SwiperSlide>
                        <div className='py-10 px-5 md:10 xl:px-16 w-full flex flex-col gap-5 bg-[#e7e4de] text-black '>
                            <div className='flex gap-7'>
                                <div className='flex gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path className='text-yellow-400 fill-yellow-400' strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path className='text-yellow-400 fill-yellow-400' strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path className='text-yellow-400 fill-yellow-400' strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path className='text-yellow-400 fill-yellow-400' strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>

                                </div>

                                <span className='text-3xl'>
                                    4.9
                                </span>
                            </div>

                            <p className='text-lg md:text-xl'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere natus distinctio excepturi. Similique quaerat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nulla, culpa sit ipsum id aperiam, at ut tempora fugit natus fuga eligendi dolor officiis quae ducimus impedit soluta? Voluptate, non. officiis alias itaque natus velit ipsa adipisci repudiandae dolorem accusamus perferendis, esse, eligendi sint temporibus ipsam!
                            </p>

                            <div className='flex gap-5 items-center'>
                                <img 
                                    src='' 
                                    alt=""
                                    className='bg-black rounded-full w-14 h-14'
                                />

                                <div className=''>
                                    <span className='text-2xl nohemiSemibold'>
                                        Djavan Silva
                                    </span>
                                    <p>
                                        Cliente Morgo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='py-10 px-5 md:10 xl:px-16 w-full flex flex-col gap-5 bg-[#e7e4de] text-black '>
                            <div className='flex gap-7'>
                                <div className='flex gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path className='text-yellow-400 fill-yellow-400' strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path className='text-yellow-400 fill-yellow-400' strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path className='text-yellow-400 fill-yellow-400' strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path className='text-yellow-400 fill-yellow-400' strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>

                                </div>

                                <span className='text-3xl'>
                                    4.9
                                </span>
                            </div>

                            <p className='text-lg md:text-xl'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere natus distinctio excepturi. Similique quaerat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nulla, culpa sit ipsum id aperiam, at ut tempora fugit natus fuga eligendi dolor officiis quae ducimus impedit soluta? Voluptate, non. officiis alias itaque natus velit ipsa adipisci repudiandae dolorem accusamus perferendis, esse, eligendi sint temporibus ipsam!
                            </p>

                            <div className='flex gap-5 items-center'>
                                <img 
                                    src='' 
                                    alt=""
                                    className='bg-black rounded-full w-14 h-14'
                                />

                                <div className=''>
                                    <span className='text-2xl nohemiSemibold'>
                                        Djavan Silva
                                    </span>
                                    <p>
                                        Cliente Morgo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='py-10 px-5 md:10 xl:px-16 w-full flex flex-col gap-5 bg-[#e7e4de] text-black '>
                            <div className='flex gap-7'>
                                <div className='flex gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path className='text-yellow-400 fill-yellow-400' strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path className='text-yellow-400 fill-yellow-400' strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path className='text-yellow-400 fill-yellow-400' strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path className='text-yellow-400 fill-yellow-400' strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>

                                </div>

                                <span className='text-3xl'>
                                    4.9
                                </span>
                            </div>

                            <p className='text-lg md:text-xl'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere natus distinctio excepturi. Similique quaerat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nulla, culpa sit ipsum id aperiam, at ut tempora fugit natus fuga eligendi dolor officiis quae ducimus impedit soluta? Voluptate, non. officiis alias itaque natus velit ipsa adipisci repudiandae dolorem accusamus perferendis, esse, eligendi sint temporibus ipsam!
                            </p>

                            <div className='flex gap-5 items-center'>
                                <img 
                                    src='' 
                                    alt=""
                                    className='bg-black rounded-full w-14 h-14'
                                />

                                <div className=''>
                                    <span className='text-2xl nohemiSemibold'>
                                        Djavan Silva
                                    </span>
                                    <p>
                                        Cliente Morgo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='py-10 px-5 md:10 xl:px-16 w-full flex flex-col gap-5 bg-[#e7e4de] text-black '>
                            <div className='flex gap-7'>
                                <div className='flex gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path className='text-yellow-400 fill-yellow-400' strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path className='text-yellow-400 fill-yellow-400' strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path className='text-yellow-400 fill-yellow-400' strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path className='text-yellow-400 fill-yellow-400' strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>

                                </div>

                                <span className='text-3xl'>
                                    4.9
                                </span>
                            </div>

                            <p className='text-lg md:text-xl'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere natus distinctio excepturi. Similique quaerat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nulla, culpa sit ipsum id aperiam, at ut tempora fugit natus fuga eligendi dolor officiis quae ducimus impedit soluta? Voluptate, non. officiis alias itaque natus velit ipsa adipisci repudiandae dolorem accusamus perferendis, esse, eligendi sint temporibus ipsam!
                            </p>

                            <div className='flex gap-5 items-center'>
                                <img 
                                    src='' 
                                    alt=""
                                    className='bg-black rounded-full w-14 h-14'
                                />

                                <div className=''>
                                    <span className='text-2xl nohemiSemibold'>
                                        Djavan Silva
                                    </span>
                                    <p>
                                        Cliente Morgo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}