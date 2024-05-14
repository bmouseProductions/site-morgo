import logo from '../../../../assets/images/logoWhite.svg'

export default function SectionFiveHome() {
    return (
        <section className=" container mx-auto px-5 md:px-10 xl:px-16 py-20 text-white" >
            <div  className="w-full h-[550px] md:h-[600px] px-5 md:px-10 flex flex-col justify-around bg-section-contact">
                <img 
                    src={logo} 
                    alt=""
                    className="w-fit"
                />

                <div className='flex flex-col gap-5'>
                    <a 
                        href=""
                        target='_blank'
                        className='w-fit px-5 py-2 bg-[#ffff00] rounded-2xl text-lg md:text-xl text-black uppercase'
                    >
                        Fale Conosco
                    </a>

                    <h2 className='text-[45px] leading-[50px] md:text-6xl xl:text-7xl uppercase'>
                        nós <br />
                        contruímos <br />
                        a <span className='text-[45px] leading-[50px] md:text-6xl xl:text-7xl uppercase nohemiBold'>sua ideia.</span>
                    </h2>
                </div>
            </div>
        </section>
    )
}