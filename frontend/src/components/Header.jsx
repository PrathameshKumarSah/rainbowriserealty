import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { MdClose, MdMenu } from 'react-icons/md';
import userIcon from '../assets/user.svg'
import logos from '../assets/rrr logo.png'


const Header = () => {

    const [active, setActive] = useState(false);
    const [menuOpened, setmenuOpened] = useState(false);
    const menuRef = useRef(null);
    const toggleMenu = () => setmenuOpened(!menuOpened);

    useEffect(()=> {
        const handleScroll =()=>{
            if (window.scrollY > 0 ){
               
                if (menuOpened){
                    setmenuOpened(false);
                }
            }

            setActive(window.scrollY > 40);
        };

        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setmenuOpened(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);

        return()=> {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpened]);
  return (
   <header className="max-padd-container fixed top-2 w-full left-0 right-0 z-50 sm:w-full">
      {/* container */}
      <div className={`${active ? "py-0" : "py-1"}max-padd-container bg-white transition-all duration-200 rounded-full px-5  ring-slate-900/5`}>
        <div className="flexBetween py-3">
            {/* logo */}
            <Link to={'/'} >
            <img src={logos} className='w-10 md:w-14' ></img>  
            </Link>
            
            {/* Navbar */}
            <div className="flexCenter gap-x-4 ">
                {/* Desktop */}
                <Navbar containerStyles={"hidden xl:flex gap-x-5 xl:gap-x-10 capitalize  medium-15 ring-slate-900/10 rounded-full p-2 bg-primary"} />
                {/* Mobile */}
                <Navbar ref={menuRef} containerStyles={`${menuOpened ? "flex items-start flex-col gap-y-8 capitalize fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration=300 z-50" : "flex items-start flex-col gap-y-8 capitalize fixed top-20 -right-[100%] p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration=300 z-50"}`} />
            </div>
            {/* button */}
            <div className="flexBetween gap-x-3 sm:gap-x-5 bold-16">
            {!menuOpened ? (<MdMenu onClick={toggleMenu} className="xl:hidden cursor-pointer text-3xl hover:text-secondary"/>) : (<MdClose onClick={toggleMenu} className="xl:hidden cursor-pointer text-3xl hover:text-secondary" />)}
            <button className=" flexCenter gap-x-6 medium-10 rounded-full pr-3">
                   <a href="https://wa.me/919319372513" target="_blank"><img src={userIcon} alt="" height={40} width={40} /></a>
                    <span className='hidden'>Whatsapp</span>
                </button>
               
            </div>
        </div>
      </div>
   </header>
  )
}

export default Header