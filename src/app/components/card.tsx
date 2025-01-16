import React from 'react'
import Image from 'next/image'
interface CardProps {
    src: string;
    alt: string;
    description: string;
    price: string | number;
  }
  
  const Card: React.FC<CardProps> = ({ src, alt, description, price }) => {
  return (
    <div className='flex flex-col justify-center items-center  p-2 h-[320px]'>
        <Image src={src} width={250} height={250} alt={alt} className='-mt-4'/>
        <div className='flex flex-col justify-between flex-grow'>
        <br />
        <div className='flex flex-col gap-y-1'><p>{description}</p>
            <h3 className='font-bold text-lg'>{price}</h3></div>
        </div>
    </div>
  )
}

export default Card