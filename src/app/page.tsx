import React from 'react'
import Navbar from './components/navbar'
import Image from "next/image"
import Link from 'next/link'
import Card from './components/card'
import BlogCard from './components/blogCard'
const Page = () => {
  return (
    <div className='mx-auto'>
      <Navbar bgColor="bg-light_skin"/>
   {/* Hero section */}
    <div className='max-w-screen bg-light_skin  flex flex-col-reverse lg:flex-row  lg:justify-center lg:px-32 px-4'>
      <div className='flex justify-center items-center' >
        <div className='flex flex-col lg:gap-y-8 gap-y-4'>
        <h2 className='lg:text-[70px] text-[40px] leading-none'>Rocket single seater</h2>
        <Link href={"./shop"} className='text-2xl underline lg:underline-offset-8 mb-10 underline-offset-4' > Shop Now</Link>
      </div>
      </div>
      <Image src={"/chair.png"} width={650} height={650} alt='chair-image' className='lg:-mx-28 lg:-my-10  -my-10'/>
    </div>

    {/* table section  */}
<div className='grid lg:grid-cols-2 grid-cols-1 justify-between py-10 lg:px-10 gap-y-10 lg:gap-y-0 px-4 bg-palePink'>
  <div>
  <Image src={"/table-1.png"} width={450} height={450} alt='chair-image' className='-mb-28 -mx-10 lg:-mx-0'/>
  
      <div className='lg:pl-20 flex flex-col gap-y-4'>
      <h3 className='text-4xl'>
        Side table
      </h3>
      <Link href={"./shop"} className='text-xl underline underline-offset-8 ' >View more</Link>
    
    </div>
  </div>

  <div className='flex flex-col gap-y-8'>
  <Image src={"/sofa-1.png"} width={450} height={450} alt='chair-image' className='-mb-28 -mx-16 lg:-mx-0'/>
  
      <div className='lg:pl-20 flex flex-col gap-y-4'>
      <h3 className='text-4xl'>
        Side table
      </h3>
      <Link href={"./shop"} className='text-xl underline underline-offset-8' >View more</Link>
    
    </div>
  </div>
  <div></div>
</div>

{/* top pic section  */}

<div className='lg:p-10 px-4 py-10 flex flex-col gap-y-12 '>
  <div className='flex flex-col justify-center items-center gap-y-4 mt-4 '><h2 className='capitalize text-5xl  font-normal text-center'>Top picks for you</h2>
  <p className='font-semibold font-sans text-lg text-gray-500 text-center'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
  </div>
  <div className='grid lg:grid-cols-4 gap-y-16 lg:gap-y-0 grid-cols-1 lg:gap-x-10 justify-center items-center'>
    <Card src='/sofa-2.png' alt='sofa' description='Trenton modular sofa_3' price="Rs. 25,000.00"/>
    <Card src='/dine-1.png' alt='dining-table' description='Granite dining table with dining chair' price="Rs. 25,000.00"/>
    <Card src='/dine-2.png' alt='outdoor-bar-table' description='Outdoor bar table and stool' price="Rs. 25,000.00"/>
    <Card src='/dressing-table.png' alt='dressing-table' description='Plain console with teak mirror' price="Rs. 25,000.00"/>
  </div>
  <div className='flex justify-center'><Link href={"./shop"} className='text-xl underline underline-offset-8 font-semibold' >View more</Link></div>
</div>

{/* new arrival section  */}

<div className='max-w-screen bg-paleSkin lg:flex lg:justify-between grid grid-cols-1 lg:pr-28 '>
      <Image src={"/Asgaard-sofa.png"} width={700} height={700} alt='chair-image'/>
      <div className='flex justify-center items-center' >
        <div className='flex flex-col gap-y-4 justify-center items-center'>
          <p className='capitalize text-3xl font-custom'>New arrivals</p>
        <h2 className='text-5xl font-extrabold mb-6'>Asgaard sofa</h2>
        <Link href={"./asgaardSofa"} className='text-xl border border-black py-4 px-16 mb-16 lg:mb-0' > Order Now</Link>
      </div>
      </div>
    </div>

  {/* blog section  */}

  <div className='p-10 flex flex-col gap-y-12 '>
  <div className='flex flex-col justify-center items-center gap-y-4 mt-4 '><h2 className='capitalize text-5xl  font-normal'>Our Blogs</h2>
  <p className='font-semibold font-sans text-lg text-gray-500 text-center'>Find a bright ideal to suit your taste with our great selection</p>
  </div>
  <div className='grid grid-cols-1 lg:grid-cols-3  lg:gap-x-10 gap-y-20 lg:gap-y-0 justify-center items-center'>
    <BlogCard src='/Rectangle-13.png' alt='blog-1-image' title='Going all-in with millennial design'/>
    <BlogCard src='/Rectangle-14.png' alt='blog-2-image' title='Going all-in with millennial design'/>
    <BlogCard src='/Rectangle-15.png' alt='blog-3-image' title='Going all-in with millennial design'/>
  </div>
  <div className='flex justify-center'><Link href={"./blog"} className='text-xl underline underline-offset-8 font-semibold capitalize mt-10 lg:mt-0' >View all post</Link></div>
</div>

{/* follow section  */}

<div className="bg-[url('/follow-pic.png')] bg-cover bg-center h-[400px] my-8 flex justify-center items-center ">
  <div className='flex flex-col gap-y-4 mt-6'>
<h3 className='lg:text-7xl text-5xl text-center font-bold  capitalize'>Our instagram</h3>
<div className='flex justify-center items-center'><p className='lg:text-2xl text-xl font-sans'>Follow our store on instagram</p></div>
<div className='flex justify-center items-center'><Link href={"https://www.instagram.com/"} className='text-[22px] capitalize bg-palePink border rounded-full lg:px-16 px-10 py-3 shadow-xl ' >Follow us</Link></div>
</div>
</div>

</div>

    
  )
}
export default Page