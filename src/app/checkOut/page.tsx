import React from 'react'
import Navbar from '../components/navbar'
import Image from 'next/image'
import { ChevronRight} from 'lucide-react'
import Tag from '../components/infoTag'
const page = () => {
  return (
    <div className='mx-auto'>
    <Navbar bgColor='white'/>
   {/* top name section  */}
<div className="bg-[url('/Rectangle-1.png')] bg-cover bg-center h-[400px] my-8 flex justify-center items-center  ">
      <div className='flex flex-col justify-center items-center gap-y-2'>
      <Image src={"/Group-57.png"} width={250} height={250} alt="shop"/>
      <p className='flex text-xl justify-center items-center'> <strong>Home</strong><ChevronRight /> Checkout </p>
      </div>
      </div>

      {/* billing details section  */}

      <div className='flex flex-col lg:flex-row justify-between lg:px-20 px-2 gap-y-20 lg:gap-y-0 py-10'>

        <div className='flex flex-col gap-y-6'>
        <h3 className='text-4xl font-semibold mb-4'>Billing details</h3>
        <div className='flex flex-col lg:flex-row gap-x-10'>

        <div className='flex flex-col gap-y-2'>
        <label htmlFor="first" className='text-lg font-semibold font-sans'>First Name</label>
        <input type='text' id='first' className='outline-none border-2 text-xl px-6 py-[14px] rounded-xl w-auto lg:max-w-[200px]'/>
        </div>

        <div className='flex flex-col gap-y-2'>
        <label htmlFor="last" className='text-lg font-semibold font-sans'>Last Name</label>
          <input type='text' id='last' className='outline-none  border-2 text-xl px-6 py-[14px] rounded-xl w-auto lg:max-w-[200px]'/>
        </div>

        </div>

        <div className='flex flex-col gap-y-3'>
        <label htmlFor="company" className='text-lg font-semibold font-sans'>Company Name (optional)</label>
          <input type='text' id='company' className='outline-none  border-2 text-xl px-6 py-[14px] rounded-xl w-auto lg:w-[440px]'/>
        </div>
        

        <div className='flex flex-col gap-y-3'>
        <label htmlFor="country" className='text-lg font-semibold font-sans'>Company Name (optional)</label>

    
  <div className="relative w-auto lg:w-[440px]">
  <select
    id="country"
    className="appearance-none outline-none border-2 border-gray-300 text-xl px-6 py-3 rounded-xl w-full bg-white"
  >
    <option value="option2">Pakistan</option>
    <option value="option1">Sri Lanka</option>
    <option value="option3">India</option>
  </select>
  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
    <svg
      className="w-5 h-5 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </div>
</div>

        </div>
      
        <div className='flex flex-col gap-y-3'>
        <label htmlFor="street" className='text-lg font-semibold font-sans'>Street address</label>
          <input type='text' id='street' className='outline-none  border-2 text-xl px-6 py-[14px] rounded-xl w-auto lg:w-[440px]'/>
        </div>
      
        <div className='flex flex-col gap-y-3'>
        <label htmlFor="city" className='text-lg font-semibold font-sans'>Town / City</label>
          <input type='text' id='city' className='outline-none  border-2 text-xl px-6 py-[14px] rounded-xl w-auto lg:w-[440px]'/>
        </div>

        <div className='flex flex-col gap-y-3'>
        <label htmlFor="province" className='text-lg font-semibold font-sans'>Province</label>
  <div className="relative w-auto lg:w-[440px]">
  <select
    id="province"
    className="appearance-none outline-none border-2 border-gray-300 text-xl px-6 py-3 rounded-xl w-full bg-white"
  >
    <option value="option1">Sindh</option>
    <option value="option2">Panjab</option>
    <option value="option3">Balochistan</option>
  </select>
  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
    <svg
      className="w-5 h-5 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </div>
</div>

        </div>
      
        <div className='flex flex-col gap-y-3'>
        <label htmlFor="zip" className='text-lg font-semibold font-sans'>Zip code</label>
          <input type='text' id='zip' className='outline-none  border-2 text-xl px-6 py-[14px] rounded-xl w-auto lg:w-[440px]'/>
        </div>

        <div className='flex flex-col gap-y-3'>
        <label htmlFor="Phone" className='text-lg font-semibold font-sans'>Phone</label>
          <input type='text' id='Phone' className='outline-none  border-2 text-xl px-6 py-[14px] rounded-xl w-auto lg:w-[440px]'/>
        </div>

        <div className='flex flex-col gap-y-3'>
        <label htmlFor="email" className='text-lg font-semibold font-sans'>Town / City</label>
          <input type='email' id='email' className='outline-none  border-2 text-xl px-6 py-[14px] rounded-xl w-auto lg:w-[440px]'/>
        </div>

        <input type='text' id='add-info' placeholder='Additional information' className='outline-none  border-2 text-xl px-6 py-[14px] rounded-xl w-auto lg:w-[440px]'/>

       
      </div>

<div className='lg:w-[500px] w-auto flex flex-col gap-y-6'>
  <div className='flex justify-between'>
    <span className='text-3xl font-semibold'>Product</span>
    <span  className='text-3xl font-semibold'>Subtotal</span>
  </div>

  <div className='flex justify-between'>
    <span className='flex gap-x-4 justify-center items-center' >
      <span className='text-lg text-gray-400 tracking-wide'>Asgaard sofa</span>
      <span>X</span>
      <span>1</span>
    </span>
    <span  className='text-lg font-extralight'>Rs. 250,000.00</span>
  </div>

  <div className='flex justify-between'>
    <span  className='text-lg tracking-wide '>Subtotal</span>
    <span  className='text-lg font-extralight'>Rs. 250,000.00</span>
  </div>
  
  <div className='flex justify-between'>
    <span  className='text-lg tracking-wide'>Total</span>
    <span  className='text-2xl text-yellow-600 font-semibold'>Rs. 250,000.00</span>
  </div>
<hr className="border-t-2 border-gray-300 my-10" />
<div className='flex gap-x-4 items-center'>
<input type="radio" name="bank" id="bank" className='size-4' />
<p className='text-lg font-semibold capitalize'>Direct Bank transfer</p>
</div>

<p className='text-lg text-gray-400'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

<div className='flex gap-x-4 items-center'>
<input type="radio" name="bank" id="bank" className='size-4' />
<p className='text-lg font-semibold text-gray-400 capitalize'>Direct Bank transfer</p>
</div>

<div className='flex gap-x-4 items-center'>
<input type="radio" name="bank" id="bank" className='size-4' />
<p className='text-lg font-semibold text-gray-400 capitalize'>Cash on delivery</p>
</div>
<p className='text-lg '>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong className='text-black'>privacy policy.</strong></p>

<div className="flex justify-center items-center"><button className='border px-16 border-black font-sans font-custom text-[16px] py-3 rounded-xl'>Place Order</button>
</div>
</div>
      </div>
      <Tag/>
      </div>
   
  )
}

export default page