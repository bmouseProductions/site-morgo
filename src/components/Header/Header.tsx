import React from "react";
import {
  Navbar,
  Collapse,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

import logo from '../../assets/images/logo.svg'
 
function NavList() {
  return (
    <ul className=" flex flex-col md:flex-row md:items-center gap-5">

      <NavLink to="/" className="text-xl md:text-xl hover:!text-gray-500 !font-montserrat cursor-pointer hover:underline decoration-[#3196d7] underline-offset-8 transition-all">
        Home
      </NavLink>

      <NavLink to="/sobre" className="text-xl md:text-xl hover:!text-gray-500 !font-montserrat cursor-pointer hover:underline decoration-[#3196d7] underline-offset-8 transition-all">
        Sobre
      </NavLink>

      <NavLink to="/sobre" className="text-xl md:text-xl hover:!text-gray-500 !font-montserrat cursor-pointer hover:underline decoration-[#3196d7] underline-offset-8 transition-all">
        Nossos Trabalhos
      </NavLink>
      
      <a
        href="https://bmouseproductions.com/view/atendimento/"
        className=" px-5 py-3  text-xl rounded-[30px] bg-[#ffff00] hover:bg-[#3196d7] transition-all shadow-botao shadow-[#760BFF]"
      >
        Fale conosco  
      </a>
    </ul>
  );
}
 
export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <Navbar 
      className=" mx-auto max-w-[900px] px-5 py-5 text-black bg-transparent rounded-none border-none" 
      placeholder={undefined} 
      onPointerEnterCapture={undefined} 
      onPointerLeaveCapture={undefined}
    >
      <div className="flex items-center justify-between text-blue-gray-900">

        <NavLink to="/" className=" cursor-pointer">
          <img src={logo} alt="logo" className="w-[200px] md:w-[150px] lg:w-[200px] " />
        </NavLink>

        <div className="hidden md:block">
          <NavList />
        </div>
        
        <button
          className="md:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          { openNav ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            : 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          }
        </button>

        
      </div>
      
      <Collapse open={openNav} className="overflow-hidden">
        <div className="pt-7">
            <NavList />
        </div>
      </Collapse>

      
    </Navbar>
  );
}