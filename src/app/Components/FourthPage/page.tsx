import Image from 'next/image'
import React from 'react'

const FourthPage = () => {
  return (
    <div className='flex bg-[#f6f7f9] lg:px-6 px-2 flex-col-reverse lg:flex-row    mt-12 justify-between'>
  <script src="https://cdn.tailwindcss.com"></script>
<div className='flex'>
<div className="bg-gray-100 rounded-[10px] w-[100%] mt-4 lg:mt-0  ">
<div className="w-full max-w-[782px] pt-8   lg:w-[856px] bg-white px-4 sm:px-6 lg:px-8 rounded-lg ">
  {/* <!-- Billing Info --> */}
  <div className="mb-6 font-sans">
    <h2 className="text-lg text-[#1A202C] font-[700] mb-4"><span className='text-blue-500'>Billing</span> Info</h2>
    <div className="flex flex-wrap justify-between">
      <p className="text-[#90A3BF] text-[14px] font-[500]">Please enter your billing info</p>
      <p className="text-[#90A3BF] text-[14px] font-[500]">Step 1 of 4</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex flex-col space-y-4">
        <label className="text-[16px] text-[#1A202C] font-[600]" htmlFor="">
          Name
        </label>
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 rounded w-full py-3 px-2"
        />
        <label className="text-[16px] font-[600] text-[#1A202C]" htmlFor="">
          Phone Number
        </label>
        <input
          type="text"
          placeholder="Phone Number"
          className="border border-gray-300 py-3 px-2 rounded w-full"
        />
      </div>
      
      <div className="flex flex-col space-y-4">
        <label className="text-[16px] text-[#1A202C] font-[600]" htmlFor="">
          Address
        </label>
        <input
          type="text"
          placeholder="Address"
          className="border border-gray-300 rounded w-full py-3 px-2"
        />
        <label className="text-[16px] font-[600] text-[#1A202C]" htmlFor="">
          Town/City
        </label>
        <input
          type="text"
          placeholder="Town/City"
          className="border border-gray-300 py-3 px-2 rounded w-full"
        />
      
    
  </div>
  
  </div>
  </div>

  {/* <!-- Rental Info --> */}
  <div className="mb-6 font-sans">
    <h2 className="text-lg text-[#1A202C] font-semibold mb-4">Rental Info</h2>
    <div className="flex flex-wrap justify-between">
      <p className="text-[#90A3BF] text-[14px] font-[500]">Please enter your billing info</p>
      <p className="text-[#90A3BF] text-[14px] font-[500]">Step 1 of 4</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{/* Rental Content */}</div>
  </div>

  {/* <!-- Payment Method --> */}
  <div className="mb-6">
    <h2 className="text-lg text-[#1A202C] font-semibold text-[20px] mb-4">Payment Method</h2>
    <div className="flex flex-wrap justify-between mb-4">
      <p className="text-[#90A3BF] text-[14px] font-[500]">Please enter your payment method</p>
      <p className="text-[#90A3BF] text-[14px] font-[500]">Step 3 of 4</p>
    </div>
    <div className="space-y-4">
      <div className="flex flex-wrap justify-between items-center">
        <label className="block text-[#1A202C]">
          <input type="radio"  name="payment" className="mr-2 text-[#1A202C]" /> Credit Card
        </label>
        <Image className="w-[92px] h-[20px] object-cover" src="/visa.jpg" width={92} height={20} alt="Visa" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Card Number"
          className="border border-gray-300 p-3 rounded w-full"
        />
        <input
          type="text"
          placeholder="Expiration Date"
          className="border border-gray-300 p-3 rounded w-full"
        />
        <input
          type="text"
          placeholder="Card Holder"
          className="border border-gray-300 p-3 rounded w-full"
        />
        <input
          type="text"
          placeholder="CVC"
          className="border border-gray-300 p-3 rounded w-full"
        />
      </div>
      <div className="flex flex-wrap justify-between items-center">
        <label className="block text-[#1A202C]">
          <input type="radio" name="payment" className="mr-2 text-[#1A202C]" /> PayPal
        </label>
        <Image className="w-[92px] h-[20px] object-cover" src="/paypal.jpg" width={92} height={20} alt="PayPal" />
      </div>
      <div className="flex flex-wrap justify-between items-center">
        <label className="block text-[#1A202C]">
          <input type="radio" name="payment" className="mr-2 text-[#1A202C]" /> Bitcoin
        </label>
        <Image className="w-[92px] h-[20px] object-cover" src="/btc.jpg" width={92} height={20} alt="Bitcoin" />
      </div>
    </div>
  </div>

  {/* <!-- Confirmation --> */}
  <div className="mb-6">
    <h2 className="text-lg font-semibold text-[#1A202C] mb-4">Confirmation</h2>
    <div className="flex flex-wrap justify-between mb-4">
      <p className="text-[#90A3BF] text-[14px] font-[500]">Please enter your payment method</p>
      <p className="text-[#90A3BF] text-[14px] font-[500]">Step 4 of 4</p>
    </div>
    <label className="block mb-8 mt-4 text-[#1A202C]">
      <input type="checkbox" className="mr-2 text-[#1A202C]" /> I agree to receive marketing emails.
    </label>
    <label className="block mb-2 text-[#1A202C]">
      <input type="checkbox" className="mr-2 text-[#1A202C]" /> I agree to terms and conditions.
    </label>
  </div>

  {/* <!-- Submit Button --> */}
  <div>
    <button className="w-full sm:w-[140px] h-[56px] bg-blue-600 text-white p-3 rounded-[10px] hover:bg-blue-700">
      Rent Now
    </button>
  </div>

  <div className="mt-6">
    <Image className="h-[32px] w-[32px] object-cover" src="/protect.jpg" width={92} height={20} alt="" />
    <h2 className="text-lg font-semibold text-[#1A202C] mt-4 mb-4">Confirmation</h2>
    <div className="flex flex-wrap justify-between mb-4">
      <p className="text-[#90A3BF] text-[14px] font-[500]">Please enter your payment method</p>
    </div>
  </div>
  </div>
  </div>
  </div>
  
    {/* Second Section */}
    <div className="w-full px-2   sm:w-[100%] rounded-[8px] bg-[#ffffff] lg:w-[398px]  h-[430px] lg:h-[510px]">
      <div className="h-auto w-full mt-8 ">
        <div className="flex  items-center justify-between w-full">
          <p className="text-[24px] pl-2 lg:pl-2 lg:text-[32px] font-[700] text-[#1A202C]">Nissan GT - R</p>
          <i className="fa-solid fa-heart text-[#ED3F3F] bg-white p-2 rounded-full  pr-2 shadow-md"></i>
        </div>
        <div className="flex space-x-1.5 pl-2 lg:pl-2">
          <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13">
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <p className="text-base text-[14px]  text-[#596780] !ml-2">440+ Reviewer</p>
            </div>
  <div className='h-[120px] mt-6  '> <p className='text-[17px] lg:text-[19px] text-[#596780]
  font-[400] leading-[40px] pl-2 lg:pl-2'>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p></div>
  <div className=' h-[0px] lg:h-[72px] lg:mt-0 mx-2 sm:pt-16'>
    <div className='hidden  lg:block   items-center justify-between'>
      <div className='flex justify-between'><p className='text-[20px] font-[400] text-[#90A3BF]'>Type Car</p> <p className='text-[20px] font-[600] text-[#596780]'>Sport</p> <p className='text-[20px] font-[400] text-[#90A3BF]'>Capacity</p> <p className='text-[20px] font-[600] text-[#596780]'>2 Person</p>
      </div></div>
  
  <div className=' h-[0px] lg:h-[72px]  mt-2'>
    <div className=' hidden lg:block items-center justify-between'>
      <div className='flex justify-between'><p className='text-[20px] font-[400] text-[#90A3BF]'>Steering </p> <p className='text-[20px] font-[600] text-[#596780]'>Manual </p> <p className='text-[20px] font-[400] text-[#90A3BF]'>Gasoline </p> <p className='text-[20px] font-[600] text-[#596780]'>70L</p>
      </div>
      </div>
    </div>
    <div className="mt-24 md:mt-4 lg:mt-4 sm:mt-24 px-1 pb-3 flex font-sans  justify-between gap-6 h-[70px]">
    <a href="#">
      <h5 className="text-[20px] font-[700]  text-gray-900">$72.00/ <span className='text-[14px] font-[700] text-[#90A3BF]'>day</span>
      </h5>
      <p className='text-[14px] font-[700] text-[#90A3BF]'>$80.00</p>
    </a>
    <button className='w-[116px] rounded-[4px] h-[44px] bg-[#3563E9] text-[16px] font-[600] tracking-[-2%] text-[white]'>Rent Now</button>
  </div>
 
          {/* <!-- Similar svg rest --> */}
          </div>
          </div>
          </div>
          </div>
    
  )
}

export default FourthPage