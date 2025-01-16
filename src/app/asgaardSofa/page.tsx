import React from 'react'
import Navbar from '../components/navbar'
import { ChevronRight, Facebook, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Card from '../components/card'
import Link from 'next/link'
const Page = () => {
  return (
    <div className='mx-auto'>
        <Navbar bgColor='white'/>

        {/* path section  */}

        <div>
        <div className=' py-10 lg:px-20 px-4 flex  lg:text-xl text-lg  items-center lg:gap-x-6 gap-x-4 '>
        <p className=' text-gray-400'>Home </p><ChevronRight />  <p className='text-gray-400'>Shop </p> <ChevronRight />
     <div className="border-r-2 h-8 border-gray-500" />
   <p >Asgaard sofa</p>
 

      </div>
        </div>

        {/* product detail section  */}

        <div className='flex flex-col lg:flex-row lg:gap-x-20 lg:px-20 gap-y-20 lg:gap-y-0'>
<div className='flex gap-x-2 lg:gap-x-10 px-1 '>
    <div className='flex flex-col gap-y-5'>
    <Image src={"/viewDetails/Outdoor sofa set 2.png"} width={70} height={70} alt='sofa' className='bg-paleSkin rounded-lg py-3'/>
    <Image src={"/viewDetails/Outdoor sofa set_2 1.png"} width={70} height={70} alt='sofa' className='bg-paleSkin rounded-lg py-3'/>
    <Image src={"/viewDetails/Stuart sofa 1.png"} width={70} height={70} alt='sofa' className='bg-paleSkin rounded-lg py-3'/>
    <Image src={"/viewDetails/Maya sofa three seater (1) 1.png"} width={70} height={70} alt='sofa' className='bg-paleSkin rounded-lg py-3'/>
    </div>
    <div>
    <Image src={"/Asgaard-sofa.png"} width={500} height={500} alt=''className='bg-paleSkin rounded-lg py-4'/>
    </div>
    
</div>

<div className='flex flex-col max-w-[430px] h-auto px-2 lg:px-0 gap-y-3'>
    <h3 className='text-4xl tracking-wide'>Asgaard sofa</h3>
    <p className='text-xl text-gray-400'>Rs. 250,000.00</p>
    <div className='flex gap-x-5'>
        <div className='flex'>
            <Image src={"/star-full.png"} alt='' height={30} width={30}/>
            <Image src={"/star-full.png"} alt='' height={30} width={30}/>
            <Image src={"/star-full.png"} alt='' height={30} width={30}/>
            <Image src={"/star-full.png"} alt='' height={30} width={30}/>
            <Image src={"/star-half.png"} alt='' height={30} width={30}/>
        </div>
        <div className="border-r-2 h-8 border-gray-400" />
        <div className='flex justify-center items-center'><p className='text-gray-400'>5 Customer Review</p></div>
    </div>
    <p className=' tracking-wide'> Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.

</p>
<p className='text-gray-400'>Size</p>
<div className='flex gap-x-2'>
  <span className='px-3 py-2 rounded-lg text-sm bg-light_skin cursor-pointer'>L</span>
  <span className='px-3 py-2 rounded-lg text-sm bg-paleSkin cursor-pointer'>XL</span>
  <span className='px-3 py-2 rounded-lg text-sm bg-paleSkin cursor-pointer'>XS</span>
  </div>
<p className='text-gray-400'>Color</p>
    <div className='flex gap-x-4'>
        <div>
        <span className='py-2 px-[16.5px] rounded-full bg-pBlue'></span></div>
        <div>
        <span className='py-2 px-[16.5px] rounded-full bg-black'></span></div>
        <div>
        <span className='py-2 px-[16.5px] rounded-full bg-pStone'></span>
        </div>
    </div>
    <div className='flex gap-x-10'>
        <span className=' border border-gray-400 px-3 gap-x-6 items-center py-3 max-w-24  rounded-lg flex'><strong>-</strong>1 <strong>+</strong></span>
        <span className='border border-black px-3 py-3 w-40  text-center rounded-lg '>Add to cart</span>
    </div>
    <hr className="border-t-2 border-gray-300 my-10" />
    <div className='flex flex-col gap-y-3' >
        
        <p className='text-gray-400'>SKU &nbsp; &nbsp; &nbsp; &nbsp;: SS001</p>
        
        <p className='text-gray-400'>Category&nbsp;:&nbsp;Sofas</p>
       
        <p className='text-gray-400'>Tags&nbsp; &nbsp; &nbsp; &nbsp; : Sofa, Chair, Home, Shop</p>
      
        <p className='flex text-gray-400'>Share&nbsp; &nbsp; &nbsp; &nbsp;: <span className='flex gap-x-5 mx-2'><Facebook className='text-white bg-black rounded-full size-6 p-1'/>
         <Linkedin className='text-white bg-black size-6 rounded-md p-[1px]'/> <Twitter className='text-white bg-black rounded-full size-6 '/></span></p>
        
    </div>
</div>
        </div>

        {/* product information section  */}

        <div className='border-y-[1.5px] border-gray-300 lg:p-20 px-2 lg:px-0 my-16'>
            <div className='flex justify-center items-center gap-x-20'>
                
                <h3 className='text-4xl mt-10 lg:mt-0'>Description</h3>
                <h3 className=' hidden lg:block text-4xl text-gray-400'>Additional Information</h3>
                <h3 className='hidden lg:block text-4xl text-gray-400'>Reviews [5]</h3>
            </div>

            <div className='lg:px-20 py-10'>
                
                    <p className=' text-gray-400 tracking-wide text-center lg:text-start'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                    <br />
                    <p className=' text-gray-400 tracking-wide text-center lg:text-start'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
              
            </div>
            <div className='flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 justify-between px-2'>
                <div className='bg-paleSkin py-10 rounded-2xl'>
                
                <Image src={"/cloud-sofa-1.png"} alt='cloud-sofa' width={530} height={530} />
                </div>

                <div className='bg-paleSkin py-10 rounded-2xl'>
                <Image src={"/cloud-sofa-2.png"} alt='cloud-sofa' width={530} height={530} />
                </div>
             
            </div>
        </div>

        {/* related products section  */}

        <div className='px-10 pt-4 pb-16 flex flex-col gap-y-28  '>
  <div className='flex flex-col justify-center items-center gap-y-4 mt-4 '><h2 className='capitalize lg:text-5xl  font-normal text-center text-4xl'>Related Products</h2>
  
  </div>
  <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-x-10 gap-y-20 lg:gap-y-0 '>
    <Card src='/sofa-2.png' alt='sofa' description='Trenton modular sofa_3' price="Rs. 25,000.00"/>
    <Card src='/dine-1.png' alt='dining-table' description='Granite dining table with dining chair' price="Rs. 25,000.00"/>
    <Card src='/dine-2.png' alt='outdoor-bar-table' description='Outdoor bar table and stool' price="Rs. 25,000.00"/>
    <Card src='/dressing-table.png' alt='dressing-table' description='Plain console with teak mirror' price="Rs. 25,000.00"/>
  </div>
  <div className='flex justify-center'><Link href={"./shop"} className='text-xl underline underline-offset-8 font-semibold' >View more</Link></div>
</div>
    </div>
  )
}

export default Page