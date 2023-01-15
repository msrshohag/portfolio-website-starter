import React, { useState, useEffect } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import { ChevronUpIcon } from '@heroicons/react/outline'

const BackToTopBtn = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 600 ? setShow(true) : setShow(false)
        })
    })

    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    return (
        show && (
            <button onClick={() => scrollToTop()} className='fixed flex items-center justify-center w-12 h-12 text-white transition-all rounded-full cursor-pointer bg-accent hover:bg-accent-hover right-24 bottom-24'>
                <ChevronUpIcon className='w-6 h-6' />
            </button>
        )
    )
}

export default BackToTopBtn