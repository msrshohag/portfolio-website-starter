import React from 'react'
import TestimonialSlider from '../components/TestimonialSlider'

const Testimonials = () => {
    return (
        <section id='testimonials' className='py-12 scetion bg-secondary'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <h2 className='section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>
                        What other people say
                    </h2>
                    <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolore illum magni cum incidunt, repudiandae sapiente similique dolorum aut itaque eligendi aperiam velit tenetur cumque quidem optio dolorem non molestiae?</p>
                </div>
                <TestimonialSlider />
            </div>
        </section>
    )
}

export default Testimonials