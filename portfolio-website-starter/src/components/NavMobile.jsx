import React, { useState } from 'react'
import { navigation } from '../data'
import { XIcon } from '@heroicons/react/outline'
import { MenuAlt3Icon } from '@heroicons/react/outline'
import Socials from './Socials'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const circleVariants = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60
      }
    }
  }

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      }
    }
  }
  return (
    <nav className='relative'>
      <div onClick={() => setIsOpen(true)} className='text-white cursor-pointer'>
        <MenuAlt3Icon className='w-8 h-8' />
      </div>
      <motion.div variants={circleVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className='fixed top-0 right-0 w-4 h-4 rounded-full bg-accent'>
      </motion.div>
      <motion.ul variants={ulVariants} initial='hidden' animate={isOpen ? 'visible' : ''}
        className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}>
        <div onClick={() => setIsOpen(false)} className='absolute cursor-pointer top-8 ring-8'>
          <XIcon className='w-8 h-8' />
        </div>
        {navigation.map((item, index) => {
          return (
            <li key={index} className='mb-8'>
              <Link to={item.href} smooth={true} duration={500} offset={-70} className='text-xl capitalize cursor-pointer'>{item.name}</Link>
            </li>
          )
        })}
      </motion.ul>
    </nav >
  )
}

export default NavMobile