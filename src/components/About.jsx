import React from 'react'
import Image from '../assets/img/about.jpg'

const About = () => {
    return (
        <section id='about' className='section bg-secondary'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-24 xl:flex-row'>
                    <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} alt="" />
                    <div className='flex flex-col items-center text-center lg:items-start lg:text-lg'>
                        <div className='flex flex-col'>
                            <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                                Shamsur Rahman Shohag
                            </h2>
                            <p className='mb-4 text-accent'>Full Stack Developer</p>
                            <hr className='mb-8 opacity-5' />
                            <p className='mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, labore quae temporibus deserunt officiis sunt odio error rerum, aut ea quia sapiente sit! Adipisci, optio at ipsa dolore similique aliquid?</p>
                        </div>
                        <button className='transition-all btn btn-md bg-accent hover:bg-accent-hover'>Contact me</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About