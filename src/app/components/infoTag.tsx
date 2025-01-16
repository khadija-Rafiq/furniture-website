import React from 'react'

const Tag = () => {
  return (
    <div className='bg-palePink lg:p-20 p-10  flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 justify-center items-center lg:gap-x-10 my-10' >
<div>
    <h3 className='capitalize lg:text-4xl text-3xl  font-normal'>Free Delivery</h3>
    <p className=' font-sans text-xl text-gray-400'>For all oders over $50, consectetur adipim scing elit.</p>
</div>
<div>
    <h3 className='capitalize lg:text-4xl text-3xl font-normal'>90 Days Return</h3>
    <p className=' font-sans text-xl text-gray-400'>If goods have problems, consectetur adipim scing elit.</p>
</div>
<div>
    <h3 className='capitalize lg:text-4xl text-3xl  font-normal'>Secure Payment</h3>
    <p className=' font-sans text-xl text-gray-400'>100% secure payment, consectetur adipim scing elit.</p>
</div>



    </div>
  )
}

export default Tag