import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='pt-20 pb-10 lg:px-24 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-16 gap-y-20 lg:gap-y-0'>
        <div className='lg:flex lg:justify-center lg:items-center'>
        <p className='text-gray-400 text-xl flex flex-wrap'>400 University Drive Suite 200 Coral <br /> Gables,
        <br />FL 33134 USA</p></div>
        <div className='flex flex-col lg:gap-y-10 gap-y-6'>
            <div className='text-gray-400 font-semibold text-xl'>Links</div>
          <Link href={"/"} className='font-semibold font-sans text-xl'>Home</Link>
          <Link href={"./shop"} className='font-semibold font-sans text-xl'>Shop</Link>
          <Link href={"./about"} className='font-semibold font-sans text-xl'>About</Link>
          <Link href={"./contact"} className='font-semibold font-sans text-xl'>Contact</Link>
        </div>

        <div className='flex flex-col lg:gap-y-10 gap-y-6'> 
        <div className='text-gray-400 font-semibold text-xl'>Help</div>
          <Link href={"/"} className='font-semibold font-sans text-xl'>Payment options</Link>
          <Link href={"/"} className='font-semibold font-sans text-xl'>Returns</Link>
          <Link href={"/"} className='font-semibold font-sans text-xl'>Privecy policy</Link>
        
        </div>

        <div className='flex flex-col lg:gap-y-10 gap-y-6'>
            <div className='text-gray-400 font-semibold text-xl'>Newsletter</div>
            <div className='flex gap-x-2'>
            <input type="email" placeholder='Enter your email adress' className='outline-none border-black border-b-[1.5px] pb-[4px]' />
            <Link href={"/"} className='text-lg underline underline-offset-8' >SUBSCRIBE</Link>
        </div>
        </div>

        </div>
        <hr className="border-t-2 border-gray-300 my-10" />
        <p className='text-xl'>2022 Kinza Khan. All rights reverved</p>
    </footer>
  )
}

export default Footer