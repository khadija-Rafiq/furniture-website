import React from 'react'
import Navbar from '../components/navbar'
import Image from 'next/image'
import { ChevronRight, GalleryVertical, LayoutGrid, SlidersHorizontal } from 'lucide-react'
import Card from '../components/card'
import Tag from '../components/infoTag'
 const Page = () => {
  return (
    <div className='mx-auto'>
      <Navbar bgColor='white'/>
      
      {/* top name section  */}
<div>
      <div className="bg-[url('/Rectangle-1.png')] bg-cover bg-center h-[400px] my-8 flex justify-center items-center  ">
      <div className='flex flex-col justify-center items-center'>
      <Image src={"/Group-55.png"} width={100} height={100} alt="shop"></Image>
      <p className='flex text-xl justify-center items-center'> <strong>Home</strong><ChevronRight /> Shop </p>
      </div>
      </div>

      </div>

      {/* filter section  */}
      
      <div className='bg-palePink py-4 lg:px-20 px-4 flex justify-between'>
     <div className='flex lg:gap-x-7 gap-x-4'>
      <div className='flex gap-x-4 justify-center items-center'>
     <SlidersHorizontal />
     <span className='text-2xl font-semibold font-sans'>Filter</span>
     </div>
     <div className='flex justify-center items-center'><LayoutGrid /></div>
     <div className='flex justify-center items-center'><GalleryVertical /></div>
     <div className="border-r-2 h-10 border-gray-500" />
     <div className='flex justify-center items-center'><p className='lg:text-lg text-sm'>Showing 1–16 of 32 results</p></div>
     </div>

     <div className='lg:flex hidden gap-x-8'>
      <div className='flex gap-x-4 justify-center items-center'>
        <p className='text-lg'>Show</p>
        <div className='bg-white px-4 py-3 text-gray-500 '>16</div>
      </div>

      <div className='flex gap-x-4 justify-center items-center'>
        <p className='text-lg'>Sort by</p>
        <span className='bg-white py-3 pr-16 pl-4 text-gray-500'>Default</span>
      </div>
     </div>
      </div>

      {/* product section  */}

      <div className='flex flex-col justify-center items-center '>
        <div className='grid lg:grid-cols-4 grid-cols-1 lg:gap-x-10 lg:gap-y-20 gap-y-36 lg:py-20 py-10 px-10 '>
<Card src='/products/Trenton modular sofa_3 1.png' alt='Trenton modular sofa_3' description='Trenton modular sofa_3' price="Rs. 25,000.00"/>

<Card src='/products/Granite dining table with dining chair 1.png' alt='Granite dining table with dining chair' description='Granite dining table with dining chair' price="Rs. 25,000.00"/>

<Card src='/products/Outdoor bar table and stool 1.png' alt='Outdoor bar table and stool' description='Outdoor bar table and stool' price="Rs. 25,000.00"/>

<Card src='/products/Plain console with teak mirror 1.png' alt='Plain console with teak mirror' description='Plain console with teak mirror' price="Rs. 25,000.00"/>

<Card src='/products/Grain coffee table 1.png' alt='Grain coffee table' description='Grain coffee table' price="Rs. 15,000.00"/>

<Card src='/products/Kent coffee table 1.png' alt='Kent coffee table' description='Kent coffee table' price="Rs. 225,000.00"/>

<Card src='/products/Round coffee table_color 2 1.png' alt='Round coffee table_color 2' description='Round coffee table_color 2' price="Rs. 251,000.00"/>

<Card src='/products/Reclaimed teak coffee table 1.png' alt='Reclaimed teak coffee table' description='Reclaimed teak coffee table' price="Rs. 25,200.00"/>

<Card src='/products/Plain console_ 1.png' alt='Plain console_' description='Plain console_' price="Rs. 258,200.00"/>

<Card src='/products/Reclaimed teak Sideboard 1.png' alt='Reclaimed teak Sideboard' description='Reclaimed teak Sideboard' price="Rs. 20,000.00"/>

<Card src='/products/SJP_0825 1.png' alt='SJP_0825' description='SJP_0825' price="Rs. 200,000.00"/>

<Card src='/products/Bella chair and table 1.png' alt='Bella chair and table' description='Bella chair and table' price="Rs. 100,000.00"/>

<Card src='/products/Granite square side table 2.png' alt='Granite square side table' description='Granite square side table' price="Rs. 258,800.00"/>

<Card src='/products/Asgaard sofa 2.png' alt='Asgaard sofa' description='Asgaard sofa' price="Rs. 250,000.00"/>

<Card src='/products/Maya sofa three seater 1.png' alt='Maya sofa three seater' description='Maya sofa three seater' price="Rs. 115,000.00"/>

<Card src='/products/Outdoor sofa set 1.png' alt='Outdoor sofa set' description='Outdoor sofa set' price="Rs. 244,000.00"/>
        </div>

       
<div className='flex lg:gap-x-8 gap-x-6 my-8'>
  <span className='lg:px-6 px-4 lg:py-4 py-2 rounded-lg text-xl bg-light_skin cursor-pointer'>1</span>
  <span className='lg:px-6 px-4 lg:py-4 py-2 rounded-lg text-xl bg-paleSkin cursor-pointer'>2</span>
  <span className='lg:px-6 px-4 lg:py-4 py-2 rounded-lg text-xl bg-paleSkin cursor-pointer'>3</span>
  <span className='lg:px-7 px-[20px] lg:py-4 py-2 rounded-lg text-xl bg-paleSkin cursor-pointer'>Next</span>

        </div>
      </div>
      <Tag/>
    </div>
  )
}
export default Page