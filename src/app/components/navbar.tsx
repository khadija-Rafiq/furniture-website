import { CirclePlus,  Heart, House, MessageCircleMore, Search, ShoppingCart, Store, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = ({bgColor="bg-white"}) => {
  return (
    <nav className={`py-10 px-16 ${bgColor} justify-center items-center`}>
      <div className='flex lg:justify-end justify-center gap-x-[28px] lg:gap-x-32'>
        <div className='hidden lg:flex gap-x-16'>
            <Link className='text-black text-xl font-light' href={"/"}>Home</Link>
            <Link className='text-black text-xl font-light' href={"./shop"}>Shop</Link>
            <Link className='text-black text-xl font-light' href={""}>About</Link>
            <Link className='text-black text-xl font-light' href={"./contact"}>Contact</Link>
        </div>
        <div className='flex lg:hidden gap-x-[28px]'>
            <Link  href={"/"}><House /></Link>
            <Link  href={"./shop"}><Store /></Link>
            <Link  href={"./contact"}><MessageCircleMore /></Link>
        </div>
        <div className='flex lg:gap-x-14 gap-x-[28px]'>
          <Link href={"./myAccount"}><User /></Link>
          <Link href={""}><Search /></Link>
          <Link href={""}><Heart /></Link>
          <Sheet>
  <SheetTrigger><ShoppingCart /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className='text-4xl mb-10'>Shopping Cart</SheetTitle>
      <SheetDescription className="border-t-2 border-gray-300 my-20" >
        <span>
     <span className='flex gap-x-4 lg:gap-x-8 justify-center items-center mt-10'>
      
      <Image src={"/Asgaard-sofa.png"} alt='asgaard-sofa' width={100} height={100} className='bg-light_skin  rounded-lg'/>
      <span >
  
        <span className='lg:text-xl text-lg text-black'>Asgaard sofa</span>
        <span className='flex gap-x-3'>
          <span >1</span>
          <span >X</span>
          <span className='text-yellow-400'>Rs. 250,000.00</span>
        </span>
      </span>
      
      <CirclePlus className='rotate-45 ' />
     </span>
     <span className='flex justify-center'>
     <span className='absolute bottom-6'>
      <span className='flex gap-x-20'>
        <span className='text-black text-lg'>Subtotal</span>
        <span className='text-yellow-400 text-lg'>Rs. 250,000.00</span>
      </span>
     
      <span className='flex gap-x-6 border-t pt-8 mt-4 border-gray-300'>
        <span><Link href={"./viewCart"} className='border-[1.5px] px-8 py-2 border-black rounded-full  text-black'>View Cart</Link></span>
        <span><Link href={"./checkOut"} className='border-[1.5px] px-8 py-2 border-black rounded-full  text-black'>Checkout</Link></span>
        
      </span>
     </span>
     </span>
     </span>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

       
        </div>
        </div>
    </nav>
  )
}

export default Navbar