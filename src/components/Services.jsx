import React from 'react'
import { services } from '../data'

const Services = () => {
    return (
        <section id='services' className='section bg-tertiary'>
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
                        what i do for clients
                    </h2>
                </div>
                <div className="grid gap-8 lg:grid-cols-4">
                    {services.map((service, index) => {
                        const { icon, name, description } = service

                        return (
                            <div className='p-6 bg-secondary rounded-2xl' key={index}>
                                <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]'>
                                    {icon}
                                </div>
                                <h4 className='mb-2 text-xl font-medium'>{name}</h4>
                                <p>{description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services