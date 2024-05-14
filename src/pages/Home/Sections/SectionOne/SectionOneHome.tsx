import logo from '../../../../assets/images/logo.svg'

export default function SectionOneHome(){
    return (
        <section>
            <div className="w-full h-[600px] md:h-[500px] bg-section-one">

            </div>

            <div className="container mx-auto px-5 md:px-10 xl:px-16 my-20">
                <div>
                    <div className='flex flex-col md:flex-row md:justify-between items-center'>
                        <h1 className="w-full text-5xl md:text-6xl xl:text-7xl uppercase">
                            nós contruímos <br />
                            a {''}
                            <span className="nohemiSemiBold px-3 pt-3 text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white bg-[#3196d7]">
                                sua ideia.
                            </span>
                        </h1>

                        <div className="mt-7 md:mt-0 w-full md:w-fit flex justify-between">
                            <img 
                                src={logo} 
                                alt="logo da empresa morgo"
                                className='md:hidden'
                            />

                            <div className="p-3 w-fit h-fit flex justify-center items-center bg-[#3196d7]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 md:w-20 md:h-20">
                                    <path className='text-white' strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <hr className='my-10 border-2 border-[#3196d7] '/>

                    <div className='flex justify-between'>
                        <div>
                            <span className=' text-gray-500'>
                                Redes Sociais
                            </span>

                            <div className='flex gap-3 flex-wrap'>
                                <a 
                                    href=""
                                    target='_blank'
                                    className='text-[#3196d7] uppercase'
                                >
                                    instagram
                                </a>

                                <a 
                                    href=""
                                    target='_blank'
                                    className='text-[#3196d7] uppercase'
                                >
                                    facebook
                                </a>

                                <a 
                                    href=""
                                    target='_blank'
                                    className='text-[#3196d7] uppercase'
                                >
                                    youtube
                                </a>
                            </div>
                        </div>

                        <img 
                            src={logo} 
                            alt="logo da empresa morgo"
                            className='hidden md:block'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}