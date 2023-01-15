import React from 'react'
import WomanImg from '../assets/img/shohag.png'

const Hero = () => {
  return (
    <section id='home' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
      <div className='container pt-12 mx-auto'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex flex-col items-center flex-1 lg:items-start'>
            <p className='text-lg text-accent mb-[22px]'>Hey, i'm Shamsur Rahman Shohag</p>
            <h1 className='text-4xl leading-[44px] md:leading-[1.2] font-bold md:tracking-[-2px]'>Full Stack Developer</h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perspiciatis nostrum maxime magnam ipsum explicabo sint tenetur similique sequi non. Laudantium odit consectetur assumenda, cumque eaque doloribus qui possimus autem!</p>
            <div className='flex items-center space-x-4'>
            <button className='transition-all btn btn-md bg-accent hover:bg-accent-hover md:btn-lg'>Contact with me</button>
            <button className='transition-all btn btn-md bg-accent hover:bg-accent-hover md:btn-lg'>Download My CV</button>
            </div>
          </div>
          <div className='items-end justify-end flex-1 hidden h-full lg:flex'>
            <img src={WomanImg} alt="" />
          </div>
        </div>

        {/* <div className='flex items-center justify-center'>
          <div className='text-center'>
            <h1 className='text-2xl font-semibold'>Shamsur Rahman Shohag</h1>
            <h2 className='text-xl'>Full Stack Developer</h2>
            <p className='text-lg'>Based in Bangladesh</p>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex-col justify-start w-1/4'>
            <div>
              <h1 className='pb-1 font-bold'>Biography</h1>
              <p>Work for money and design for love! Im Bruno, an UI/UX Interaction Designer based in Poland.</p>
            </div>
            <div className='pt-2'>
              <h1 className='pb-1 font-bold'>Contact</h1>
              <ul>
                <li>Gazipur, Dhaka</li>
                <li>msrShohag.gp@gmail.com</li>
                <li>01710673382, 01914934363</li>
              </ul>
            </div>
            <div className='pt-2'>
              <h1 className='pb-1 font-bold'>Service</h1>
              <ul>
                <li>Gazipur, Dhaka</li>
                <li>msrShohag.gp@gmail.com</li>
                <li>01710673382, 01914934363</li>
              </ul>
            </div>
          </div>
          <div className='flex items-center justify-center w-2/4'>
            <img src={avatar} alt='msrShohag' />
          </div>
          <div className='flex-col justify-end w-1/4 text-end'>
            <div>
              <h1 className='pb-1 font-bold'>Experience</h1>
              <ul>
                <li>Gazipur, Dhaka</li>
                <li>msrShohag.gp@gmail.com</li>
                <li>01710673382, 01914934363</li>
              </ul>
            </div>
            <div className='pt-2'>
              <h1 className='pb-1 font-bold'>Satisfaction client</h1>
              <ul>
                <li>Gazipur, Dhaka</li>
                <li>msrShohag.gp@gmail.com</li>
                <li>01710673382, 01914934363</li>
              </ul>
            </div>
            <div className='pt-2'>
              <h1 className='pb-1 font-bold'>Worldwide client</h1>
              <ul>
                <li>Gazipur, Dhaka</li>
                <li>msrShohag.gp@gmail.com</li>
                <li>01710673382, 01914934363</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Hero