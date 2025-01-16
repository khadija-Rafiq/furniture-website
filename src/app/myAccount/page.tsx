import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import Navbar from '../components/navbar'
import Tag from '../components/infoTag'
const page = () => {
  return (
   
<div className='mx-auto'>
<Navbar bgColor='white'/>
   {/* top name section  */}
<div className="bg-[url('/Rectangle-1.png')] bg-cover bg-center h-[400px] my-8 flex justify-center items-center  ">
      <div className='flex flex-col justify-center items-center gap-y-2'>
      <Image src={"/Group-56.png"} width={250} height={250} alt="shop"/>
      <p className='flex text-xl justify-center items-center'> <strong>Home</strong><ChevronRight /> My account </p>
      </div>
      </div>

      {/* login and register section  */}

      <div className='flex flex-col lg:flex-row justify-center gap-x-40 py-20 lg:px-32 px-4 gap-y-40 lg:gap-y-0 '>
        {/* login  */}
        <div className='flex flex-col gap-y-5'>
          <h3 className='text-4xl font-semibold mb-4'>Log In</h3>
          <label htmlFor="email" className='text-lg font-semibold font-sans'>Username or email address</label>
          <input type='email' id='email' className='outline-none border-2 text-xl px-6 py-[14px] rounded-xl w-auto lg:w-[350px]'/>
          <label htmlFor="password" className='text-lg font-semibold font-sans'>password</label>
          <input type='password' id='password' className='outline-none border-2 text-xl px-6 py-[14px] rounded-xl w-auto lg:w-[350px]' />
          <div className='flex gap-x-6 items-center'>
            <input type="checkbox" name="checkbox" id="checkbox" className='size-5 rounded-sm' />
            <span className='font-sans font-semibold'>Remember me</span>
          </div>
          <div className='flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 gap-x-6 items-center'>
          <button className='border px-16 border-black font-sans font-custom text-[16px] py-3 rounded-xl'>Login</button>
            <span className='font-extralight'>Lost your password?</span>
          </div>
        </div>

{/* register  */}
        <div className='flex flex-col gap-y-5 w-auto max-w-96'>
        <h3 className='text-4xl font-semibold mb-4'>Register</h3>
        <label htmlFor="email" className='text-lg font-semibold font-sans'>Email address</label>
          <input type='email' id='email' className='outline-none border-2 text-xl px-6 py-[14px] rounded-xl w-auto lg:w-[350px]'/>
          <p className='font-sans  tracking-wider font-[350px]'>A link to set a new password will be sent to your email address.</p>
          <p className='font-sans tracking-wider font-[350px]'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy.</strong></p>
          <div><button className='border px-16 border-black font-sans font-custom text-[16px] py-3 rounded-xl'>Register</button></div>
        </div>
      </div>
      <Tag/>
      </div>

   
  )
}

export default page