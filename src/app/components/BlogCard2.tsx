import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Calendar, Tag, UserRound } from 'lucide-react';
interface CardProps {
    src: string;
    alt: string;
   title:string;
   tagName:string;
   description:string
  }
  
  const BlogCard2: React.FC<CardProps> = ({ src, alt,title,tagName, description }) => {
  return (
    <div className='flex flex-col gap-y-6 max-w-[600px]  p-2 '>
        <Image src={src} width={600} height={600} alt={alt} className='rounded-md'/>
        <div className='flex gap-x-3 '>
      <div className='flex gap-x-2'><UserRound /><span>Admin</span></div>
      <div className='flex gap-x-2'><Calendar /><span>14 Oct 2020</span> <Tag /><span>{tagName}</span></div>
      </div>
        <div className='flex flex-col gap-y-4'>
      <p className='text-3xl font-semibold'>{title}</p>
      <p className='text-lg text-gray-400'>{description}</p>
      <div className='flex '><Link href={"./blog"} className='text-xl underline underline-offset-8 font-semibold mb-2 ' >Read more</Link></div>
   
      
        </div>
    </div>
  )
}

export default BlogCard2