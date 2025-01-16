import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Calendar, Clock7 } from 'lucide-react';
interface CardProps {
    src: string;
    alt: string;
   title:string
  }
  
  const BlogCard: React.FC<CardProps> = ({ src, alt,title }) => {
  return (
    <div className='flex flex-col gap-y-6  p-2 '>
        <Image src={src} width={300} height={300} alt={alt} className='rounded-md'/>
        <div className='flex flex-col gap-y-4'>
      <p className='text-xl'>{title}</p>
      <div className='flex justify-center'><Link href={"./blog"} className='text-xl underline underline-offset-8 font-semibold mb-2 ' >Read more</Link></div>
      <div className='flex gap-x-3 justify-center '>
      <div className='flex gap-x-2'><Clock7 /><span>5 min</span></div>
      <div className='flex gap-x-2'><Calendar /><span>12<sup>th</sup> oct 2020</span></div>
      </div>
      
        </div>
    </div>
  )
}

export default BlogCard