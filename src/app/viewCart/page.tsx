import React from 'react'
import Navbar from '../components/navbar'
import Image from 'next/image'
import { ChevronRight, Trash2 } from 'lucide-react'
import Tag from '../components/infoTag'
const page = () => {
  return (
   <div className='mx-auto'>
      <Navbar bgColor='white'/>
   {/* top name section  */}
<div className="bg-[url('/Rectangle-1.png')] bg-cover bg-center h-[400px] my-8 flex justify-center items-center  ">
      <div className='flex flex-col justify-center items-center gap-y-2'>
      <Image src={"/Group-58.png"} width={120} height={120} alt="shop"/>
      <p className='flex text-xl justify-center items-center'> <strong>Home</strong><ChevronRight /> Cart </p>
      </div>
      </div>

      {/* cart section  */}

<div className='flex flex-col lg:flex-row justify-center gap-x-10 lg:px-24  py-10'>

<div>
  <div className='bg-paleSkin flex justify-center lg:gap-x-16 gap-x-6 lg:px-10 px-6 py-4'>
    <div className='flex justify-center lg:gap-x-28 gap-x-10'>
    <span className='font-semibold tracking-wide'>Product</span>
    <span className='font-semibold tracking-wide'>Price</span>
    </div>

    <div className='flex justify-center gap-x-10'>
    <span className='font-semibold tracking-wide'>Quantity</span>
    <span className='font-semibold tracking-wide'>Subtotal</span>
    </div>
  </div>
  <div className='flex justify-center items-center pl-3 lg:pl-0 gap-x-8 py-16'>
  <div className='flex gap-x-4 flex-col text-center lg:flex-row justify-center items-center'><Image src={"/Asgaard-sofa.png"} alt='asgaard-sofa' width={100} height={100} className='bg-light_skin  rounded-lg'/>
  <span className=' text-gray-400 text-sm lg:text-base'>Asgaard sofa</span></div>
  <span className='text-gray-400 text-sm '>Rs. 250,000.00</span>
  <span className='px-2 py-1 rounded-lg text-sm  cursor-pointer border '>1</span>
  <span className='text-sm' >Rs. 250,000.00</span>
  <Trash2   className='text-light_skin'/>
  </div>
</div>

<div className='bg-paleSkin px-10 lg:w-[400px] w-auto pt-6 pb-20 flex flex-col  gap-y-12'>
  <h3 className='text-3xl font-semibold items-center'>Cart Totals</h3>
  <div className='flex flex-col gap-y-8'>
  <div className='flex justify-between'>
    <span className='font-semibold font-sans tracking-wide text-lg'>Subtotal</span>
    <span className='text-gray-400'>Rs. 250,000.00</span>
  </div>
  <div className='flex justify-between'>
    <span className='font-semibold font-sans tracking-wide text-lg'>Total</span>
    <span className='text-yellow-600 text-xl font-semibold '>Rs. 250,000.00</span>
  </div>
  </div>
  <div className='flex justify-center items-center'><button className='border px-16 border-black font-sans text-[18px] py-3 rounded-xl'>Check Out</button>
  </div>
</div>

</div>
<Tag/>

   </div>
 
   
  )
}

export default page