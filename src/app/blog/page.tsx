import { ChevronRight, Search } from 'lucide-react'
import React from 'react'
import Navbar from '../components/navbar'
import Image from 'next/image'
import BlogCard2 from '../components/BlogCard2'
import Tag from '../components/infoTag'
const page = () => {
  return (
   

<div className='mx-auto '>
    <Navbar bgColor='white'/>
   {/* top name section  */}
<div className="bg-[url('/Rectangle-1.png')] bg-cover bg-center h-[400px] my-8 flex justify-center items-center  ">
      <div className='flex flex-col justify-center items-center gap-y-2'>
      <Image src={"/Group-60.png"} width={130} height={130} alt="blog"/>
      <p className='flex text-xl justify-center items-center'> <strong>Home</strong><ChevronRight />Blog </p>
      </div>
      </div>

      {/* blog section begins here */}

      <div className='flex flex-col-reverse gap-y-20 lg-gap-y-0 lg:flex-row justify-center px-2 lx:px-0 gap-x-24 lg:pt-20 pt-4 '>

        <div className='flex flex-col gap-y-20'>

<BlogCard2 src='/Rectangle-68.png' title='Going all-in with millennial design' alt='laptop' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eius ex vero illo nihil omnis animi. Vero explicabo fuga a, dolorem inventore ea consequuntur libero, voluptate ab aperiam facere ad.
Eligendi quia repudiandae ea nobis dignissimos exercitationem placeat, illum minima dolorum harum in necessitatibus reiciendis rerum, sunt ex vero ut aliquam alias voluptatum aliquid optio distinctio ab vel! Minus, nam.
Fuga dolor quasi corrupti consequatur doloremque, blanditiis error voluptatum dignissimos totam dolorem praesentium ullam. Officia molestias sed ipsum sit temporibus dicta, illum pariatur maiores nobis obcaecati excepturi mollitia eius! Ex!' tagName='Wood'/>

<BlogCard2 src='/Rectangle-69.png' title='Exploring new ways of decorating' alt='laptop' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eius ex vero illo nihil omnis animi. Vero explicabo fuga a, dolorem inventore ea consequuntur libero, voluptate ab aperiam facere ad.
Eligendi quia repudiandae ea nobis dignissimos exercitationem placeat, illum minima dolorum harum in necessitatibus reiciendis rerum, sunt ex vero ut aliquam alias voluptatum aliquid optio distinctio ab vel! Minus, nam.
Fuga dolor quasi corrupti consequatur doloremque, blanditiis error voluptatum dignissimos totam dolorem praesentium ullam. Officia molestias sed ipsum sit temporibus dicta, illum pariatur maiores nobis obcaecati excepturi mollitia eius! Ex!' tagName='Handmade'/>

<BlogCard2 src='/Rectangle-70.png' title='Handmade pieces that took time to make' alt='laptop' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eius ex vero illo nihil omnis animi. Vero explicabo fuga a, dolorem inventore ea consequuntur libero, voluptate ab aperiam facere ad.
Eligendi quia repudiandae ea nobis dignissimos exercitationem placeat, illum minima dolorum harum in necessitatibus reiciendis rerum, sunt ex vero ut aliquam alias voluptatum aliquid optio distinctio ab vel! Minus, nam.
Fuga dolor quasi corrupti consequatur doloremque, blanditiis error voluptatum dignissimos totam dolorem praesentium ullam. Officia molestias sed ipsum sit temporibus dicta, illum pariatur maiores nobis obcaecati excepturi mollitia eius! Ex!' tagName='Wood'/>

        </div>

        <div className='flex flex-col gap-y-12'>
    <div className='border-2 border-gray-300 rounded-xl w-[350px] flex justify-between px-4 items-center'>
        <input type="search" id='name' placeholder='Abc' className='outline-none  text-lg px-2 py-[14px] '/>
        <Search />
        </div>
        <div className='flex flex-col gap-y-8'>
        <p className='text-3xl font-semibold '>Catagories</p>
        <div className='flex flex-col gap-y-8'>
          <div className='w-[350px] flex justify-between'>
            <span className='text-xl text-gray-400'>Crafts</span>
            <span className='text-xl text-gray-400'>1</span>
          </div>

          <div className='w-[350px] flex justify-between'>
            <span className='text-xl text-gray-400'>Design</span>
            <span className='text-xl text-gray-400'>8</span>
          </div>

          <div className='w-[350px] flex justify-between'>
            <span className='text-xl text-gray-400'>Handmade</span>
            <span className='text-xl text-gray-400'>7</span>
          </div>

          <div className='w-[350px] flex justify-between'>
            <span className='text-xl text-gray-400'>Interior</span>
            <span className='text-xl text-gray-400'>1</span>
          </div>

          <div className='w-[350px] flex justify-between'>
            <span className='text-xl text-gray-400'>Wood</span>
            <span className='text-xl text-gray-400'>6</span>
          </div>
        </div>
        </div>
        <div className='flex flex-col gap-y-8'>
        <p className='text-3xl font-semibold mt-10 '>Recent Posts</p>
        <div className='flex flex-col gap-y-10'>
          <div className='flex gap-x-5'>
            <Image src={"/Rectangle-71.png"} alt='' width={100} height={100}/>
            <div className='flex flex-col justify-center gap-y-1'>
              <p className='text-lg tracking-wide'>Going all-in with <br /> millennial design</p>
              <p className='text-lg text-gray-400'>03 Aug 2020</p>
            </div>
          </div>

          <div className='flex gap-x-5'>
            <Image src={"/Rectangle-72.png"} alt='' width={100} height={100}/>
            <div className='flex flex-col justify-center gap-y-1'>
              <p className='text-lg tracking-wide'>Exploring new ways  <br /> of decorating</p>
              <p className='text-lg text-gray-400'>03 Aug 2020</p>
            </div>
          </div>

          <div className='flex gap-x-5'>
            <Image src={"/Rectangle-73.png"} alt='' width={100} height={100}/>
            <div className='flex flex-col justify-center gap-y-1'>
              <p className='text-lg tracking-wide'>Handmade pieces <br />that took time to make</p>
              <p className='text-lg text-gray-400'>03 Aug 2020</p>
            </div>
          </div>

          <div className='flex gap-x-5'>
            <Image src={"/Rectangle-74.png"} alt='' width={100} height={100}/>
            <div className='flex flex-col justify-center gap-y-1'>
              <p className='text-lg tracking-wide'>Modern home <br /> in milan</p>
              <p className='text-lg text-gray-400'>03 Aug 2020</p>
            </div>
          </div>

          <div className='flex gap-x-5'>
            <Image src={"/Rectangle-75.png"} alt='' width={100} height={100}/>
            <div className='flex flex-col justify-center gap-y-1'>
              <p className='text-lg tracking-wide'>Colorful office <br />redesign</p>
              <p className='text-lg text-gray-400'>03 Aug 2020</p>
            </div>
          </div>
        </div>
        </div>
        
        </div>

      </div>
<div className='flex justify-center px-2 lg:px-0'>
      <div className='flex gap-x-8 my-8'>
  <span className='px-6 py-4 rounded-lg text-xl bg-light_skin cursor-pointer'>1</span>
  <span className='px-6 py-4 rounded-lg text-xl bg-paleSkin cursor-pointer'>2</span>
  <span className='px-6 py-4 rounded-lg text-xl bg-paleSkin cursor-pointer'>3</span>
  <span className='px-7 py-4 rounded-lg text-xl bg-paleSkin cursor-pointer'>Next</span>
  </div>
        </div>
        <Tag/>
</div>
   
  )
}

export default page