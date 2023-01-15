import React, { useState, useEffect } from 'react'
import Nav from './Nav';
import Socials from './Socials'
import NavMobile from './NavMobile'

import Logo from '../assets/img/logo.svg'

const Header = () => {
    const [bg, setBg] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false)
        });
    });

    return (
        <header className={`${ bg ? 'bg-black h-20' : 'h-24'} flex items-center fixed top-0 bg-purple-900 h-20 w-full text-white z-10 transition-all duration-300`}>
            <div className='container flex items-center justify-between h-full mx-auto'>
                {/* logo  */}
                <a href="#">
                    <img src={Logo} alt='' />
                </a>
                {/* nav  */}
                <div className='hidden lg:block'>
                    <Nav />
                </div>
                {/* socials */}
                <div className='hidden lg:block'>
                    <Socials />
                </div>
                {/* nov mobile */}
                <div className='lg:hidden'>
                    <NavMobile />
                </div>
            </div>
        </header >
    );
};

export default Header