import React from 'react'
import Navbar from '../components/navbar'
import Image from 'next/image'
import { ChevronRight, Clock, MapPin, Phone } from 'lucide-react'
import Tag from '../components/infoTag'
 const Page = () => {
  return (
   <div className='mx-auto'>
    <Navbar bgColor='white'/>
   {/* top name section  */}
<div className="bg-[url('/Rectangle-1.png')] bg-cover bg-center h-[400px] my-8 flex justify-center items-center  ">
      <div className='flex flex-col justify-center items-center gap-y-2'>
      <Image src={"/Group-59.png"} width={200} height={200} alt="shop"/>
      <p className='flex text-xl justify-center items-center'> <strong>Home</strong><ChevronRight /> Contact </p>
      </div>
      </div>

      {/* contact section begins here */}
<div className='py-20'>
      <h3 className='text-4xl font-semibold tracking-wide text-center mb-4'>Get In Touch With Us</h3>
      <div className='flex justify-center items-center'>
      <p className=' text-gray-400 tracking-wide text-lg text-center max-w-[700px]'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p></div>

<div className='flex flex-col-reverse lg:flex-row justify-center px-4 lg:px-0 gap-y-20 lg:gap-y-0 gap-x-48 pt-28 '>

  <div className='flex flex-col gap-y-10'>
    <div>
      <div className='flex gap-x-6'>
      <MapPin className='size-8' />
        <span className='text-2xl font-semibold tracking-wide'>Address</span>
      </div>
      <p className='pl-[54px] max-w-64'>236 5th SE Avenue, New York NY10000, United States</p>
    </div>

    <div>
      <div className='flex gap-x-6'>
      <Phone className='size-8' />
        <span className='text-2xl font-semibold tracking-wide'>Phone</span>
      </div>
      <p className='pl-[54px] max-w-64'>Mobile: +(84) 546-6789
      Hotline: +(84) 456-6789</p>
    </div>

    <div>
      <div className='flex gap-x-6'>
      <Clock  className='size-8' />
        <span className='text-2xl font-semibold tracking-wide'>Working Time</span>
      </div>
      <p className='pl-[54px] max-w-64 tracking-tight'>Monday - Friday : 9:00 - 22:00
        <br />
      Saturday-Sunday : 9:00 - 21:00</p>
    </div>
  </div>

  <div className='flex flex-col gap-y-4'>

  <label htmlFor="name" className='text-lg font-semibold font-sans'>Your Name</label>
  <input type='text' id='name' placeholder='Abc' className='outline-none border-2 text-lg px-6 py-[14px] rounded-xl w-auto lg:w-[420px]'/>

  <label htmlFor="email" className='text-lg font-semibold font-sans'>Email address</label>
  <input type='email' id='email' placeholder='Abc@def.com' className='outline-none border-2 text-lg px-6 py-[14px] rounded-xl w-auto lg:w-[420px]'/>

  <label htmlFor="subject" className='text-lg font-semibold font-sans'>Subject</label>
  <input type='text' id='subject'placeholder='This is an optional' className='outline-none border-2 text-lg px-6 py-[14px] rounded-xl w-auto lg:w-[420px]'/>

  <label htmlFor="message" className='text-lg font-semibold font-sans'>Message</label>
  <textarea  id='message' placeholder='Hi! i’d like to ask about' className='outline-none border-2 text-lg px-6 pt-6 pb-20 rounded-xl w-auto lg:w-[420px]'/>

  <div><button className='border px-16 border-black font-sans font-custom text-[16px] py-3 rounded-xl'>Submit</button></div>

  </div>

</div>
</div>
<Tag/>
   </div>
  )
}
export default Page
