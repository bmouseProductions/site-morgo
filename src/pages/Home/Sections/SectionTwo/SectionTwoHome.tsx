import logo from '../../../../assets/images/logo.svg'
import img1 from '../../../../assets/images/Home/img-1.webp'
import img2 from '../../../../assets/images/Home/img-2.webp'
import img3 from '../../../../assets/images/Home/img-3.webp'


export default function SectionTwoHome() {
    return (
        <section className="bg-[#1a1717] bg-section-two">
            <div className="container mx-auto px-5 md:px-10 xl:px-16 py-20 !text-white">
                <div className='flex flex-col md:flex-row md:gap-10 md:justify-between '>
                    <div className='md:max-w-[80%] 2xl:max-w-[60%] '>
                        <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl">
                            Agilidade, compromisso e <h2 className="text-[#ffff00]">efeiciência</h2>
                        </h2>

                        <p className='mt-5 '>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. sequi voluptatum! Eos cum accusamus ab sint corporis et rerum maiores dolorum nemo eum adipisicing elit. Ipsum earum odit temporibus rem inventore officiis illo sequi voluptatum! Eos cum accusamus ab sint corporis et rerum maior.
                        </p>
                    </div>

                    <img 
                        src={logo} 
                        alt="logo da empresa morgo"
                        className='ml-auto md:mx-auto my-7 md:my-0 w-[80px] md:w-auto' 
                    />
                </div>

                <div className='mt-10 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5'>
                    <a 
                        href=''
                        target='_blank'
                        className='relative grid w-full h-full'
                    >
                        <img 
                            src={img1} 
                            alt="imagem ilustrativa de uma propaganda em um muro da empresa Morgo"
                            className='w-full relative z-0'
                        />

                        <div className='absolute top-0 bg-gradient-to-b from-transparent from-50% to-[#000000] w-full h-full flex flex-col justify-end gap-2'>
                            <div className='flex flex-col p-5 gap-5'>
                                <h4>
                                    Lorem
                                </h4>

                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. sit amet consectetur adipisicingsit amet.
                                </p>
                            </div>
                        </div>

                        <div className='absolute top-0 right-0 bg-[#ffff00] p-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 ">
                                <path className='text-black' strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </div>
                    </a>

                    <div className=' flex flex-col gap-5'>
                        <a 
                            href=''
                            target='_blank'
                            className='relative block '
                        >
                            <img 
                                src={img2} 
                                alt="imagem ilustrativa de uma propaganda em um muro da empresa Morgo"
                                className='w-full relative z-0'
                            />

                            <div className='absolute top-0 bg-gradient-to-b from-transparent from-50% to-[#000000] w-full h-full flex flex-col justify-end gap-2'>
                                <div className='flex flex-col p-5 gap-5'>
                                    <h4>
                                        Lorem
                                    </h4>

                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. sit amet consectetur adipisicingsit amet. 
                                    </p>
                                </div>
                            </div>

                            <div className='absolute top-0 right-0 bg-[#ffff00] p-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 ">
                                    <path className='text-black' strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                        </a>

                        <a 
                            href=''
                            target='_blank'
                            className='relative block '
                        >
                            <img 
                                src={img3} 
                                alt="imagem ilustrativa de uma propaganda em um muro da empresa Morgo"
                                className='w-full relative z-0'
                            />

                            <div className='absolute top-0 bg-gradient-to-b from-transparent from-50% to-[#000000] w-full h-full flex flex-col justify-end gap-2'>
                                <div className='flex flex-col p-5 gap-5'>
                                    <h4>
                                        Lorem
                                    </h4>

                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. sit amet consectetur adipisicingsit amet.
                                    </p>
                                </div>
                            </div>

                            <div className='absolute top-0 right-0 bg-[#ffff00] p-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 ">
                                    <path className='text-black' strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}