import React from 'react'
import { social } from '../data'
import Logo from '../assets/img/logo.png'

const Footer = () => {
    return (
        <footer className='py-12 bg-tertiary'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center justify-between space-y-6 lg:flex-row lg:space-y-0'>
                    <div className="flex items-center justify-center space-x-6">
                        {social.map((item, index) => {
                            const { href, icon } = item
                            return (
                                <a className='text-base text-accent' href={href} key={index}>
                                    {icon}
                                </a>
                            )
                        })}
                    </div>
                    <div>
                        <img src={Logo} alt="" />
                    </div>

                    <p>&copy; 2023 msrShohag. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer