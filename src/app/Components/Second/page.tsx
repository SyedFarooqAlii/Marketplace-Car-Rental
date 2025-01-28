import React from 'react'
import Image from 'next/image'
const SecondPage = () => {
  
  const data=[
    { 
      id:1,
      name:"Koenigsegg",
    type:"Sports",
     imgurl:"/car1.png",
    specification:"90L",
    cartype:"Manual",
    person:"2 People",
    price:"$99.00/",
    days:"day",
      buttontext:"Rent Now"
  },
    {
      id:2,
      name:"Nissan GT - R",
    type:"Sports",
     imgurl:"/car2.png",
    specification:"90L",
    cartype:"Manual",
    person:"2 People",
    price:"$80.00/",
    days:"day",
    buttontext:"Rent Now"
  },
  { 
    id:3,
    name:"Koenigsegg",
  type:"Sports",
   imgurl:"/car1.png",
  specification:"90L",
  cartype:"Manual",
  person:"2 People",
  price:"$99.00/",
  days:"day",
    buttontext:"Rent Now"
  },
 ]
  const data2=[
  { 
    id:1,
    name:"All New Rush",
    type:"SUV",
     imgurl:"/suv1.png",
    specification:"90L",
    cartype:"Manual",
    person:"6 People",
    price:"$76.00/",
    days:"day",
    buttontext:"Rent Now"
  },
    { 
      id:2,
      name:"CR  - V",
    type:"SUV",
     imgurl:"/suv2.png",
    specification:"80L",
    cartype:"Manual",
    person:"6 People",
    price:"$80.00/",
    days:"day",
    buttontext:"Rent Now"
  },
    { 
      id:3,
      name:"All New Terios",
    type:"SUV",
     imgurl:"/suv3.png",
    specification:"70L",
    cartype:"Manual",
    person:"2 People",
    price:"$74.00/",
    days:"day",
    buttontext:"Rent Now"
  },
  
  
    { 
      id:4,
      name:"MG ZX Exclusice",
    type:"SUV",
     imgurl:"/suv5.png",
    specification:"90L",
    cartype:"Manual",
    person:"6 People",
    price:"$76.00/",
    days:"day",
    buttontext:"Rent Now"
  },
    {
      id:6,
      name:"New MG ZS",
    type:"SUV",
     imgurl:"/suv6.png",
    specification:"90L",
    cartype:"Manual",
    person:"6 People",
    price:"$80.00/",
    days:"day",
    buttontext:"Rent Now"
  },
  { 
    id:7,
    name:"MG ZX Exclusice",
    type:"SUV",
     imgurl:"/suv7.png",
    specification:"90L",
    cartype:"Manual",
    person:"6 People",
    price:"$76.00/",
    days:"day",
    buttontext:"Rent Now"
  },
  
  
  ]
  
  
  return (


    <div>
<div className='font-sans flex '>

{/* first */}
<div className="w-[360px] bg-white rounded-[10px] pl-4 space-y-4 tracking-[-2%] hidden lg:block">
<p className='text-[12px] font-[600] text-[#90A3BF] tracking-wider'>T Y P E</p>
    <div className='flex items-center gap-4 '>
    
<div className='h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px] bg-[#3563E9] text-white'>
<i className="fa-solid fa-check"></i></div>
    <div className='flex'><p className='text-[20px] font-[600] text-[#596780]'>Sport <span className='text-[#90A3BF]'> (10)</span></p></div>

    </div>
    <div className='flex items-center gap-4 '>
<div className='h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px] bg-[#3563E9] text-white'>
<i className="fa-solid fa-check"></i></div>
    <div className='flex'><p className='text-[20px] font-[600] text-[#596780]'>SUV   <span className='text-[#90A3BF]'> (12)</span></p></div>

    </div>
    <div className='flex items-center gap-4 '>
<div className='h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px] border-black border-[1px] text-white'>
<i className="fa-solid fa-check"></i></div>
    <div className='flex'><p className='text-[20px] font-[600] text-[#596780]'>MPV   <span className='text-[#90A3BF]'> (16)</span></p></div>

    </div>
    <div className='flex items-center gap-4 '>
<div className='h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px] border-black border-[1px] text-white'>
<i className="fa-solid fa-check"></i></div>
    <div className='flex'><p className='text-[20px] font-[600] text-[#596780]'>Sedan  <span className='text-[#90A3BF]'> (20)</span></p></div>

    </div>
    <div className='flex items-center gap-4 '>
<div className='h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px] border-black border-[1px] text-white'>
<i className="fa-solid fa-check"></i></div>
    <div className='flex'><p className='text-[20px] font-[600] text-[#596780]'>Coupe  <span className='text-[#90A3BF]'> (14)</span></p></div>

    </div>
    <div className='flex items-center gap-4 '>
<div className='h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px] border-black border-[1px] text-white'>
<i className="fa-solid fa-check"></i></div>
    <div className='flex'><p className='text-[20px] font-[600] text-[#596780]'>Hatchback   <span className='text-[#90A3BF]'> (14)</span></p></div>

    </div>
{/*  */}
    <div className='h-[240px]  space-y-4'>
      <p className='text-[12px] font-[600] text-[#90A3BF] tracking-wider'>C A P A C I T Y</p>
      <div className='flex items-center gap-4 '>
<div className='h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px]  bg-[#3563E9] text-white'>
<i className="fa-solid fa-check"></i></div>
    <div className='flex'><p className='text-[20px] font-[600] text-[#596780]'>MPV   <span className='text-[#90A3BF]'> (16)</span></p></div>

    </div>
    <div className='flex items-center gap-4 '>
<div className='h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px] border-black border-[1px] text-white'>
<i className="fa-solid fa-check"></i></div>
    <div className='flex'><p className='text-[20px] font-[600] text-[#596780]'>Sedan  <span className='text-[#90A3BF]'> (20)</span></p></div>

    </div>
    <div className='flex items-center gap-4 '>
<div className='h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px] border-black border-[1px] text-white'>
<i className="fa-solid fa-check"></i></div>
    <div className='flex'><p className='text-[20px] font-[600] text-[#596780]'>Coupe  <span className='text-[#90A3BF]'> (14)</span></p></div>

    </div>
    <div className='flex items-center gap-4 '>
<div className='h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px] bg-[#3563E9] text-white'>
<i className="fa-solid fa-check"></i></div>
    <div className='flex'><p className='text-[20px] font-[600] text-[#596780]'>Hatchback   <span className='text-[#90A3BF]'> (14)</span></p></div>

   </div>
    </div>

    {/* third */}
    <div className='w-[296px] h-[101px] space-y-4'>
    <p className='text-[12px] font-[600] text-[#90A3BF] tracking-wider'>C A P A C I T Y</p>
    <div className='h-[20px]'>
      <img className='' src="/line.jpg" alt="" />
    </div>
    <p className='text-[20px] font-[600] text-[#596780]'>Max. $100.00</p>
    </div>
</div>

{/* second */}
<div className="flex flex-col">
  <div className="flex flex-col bg-white rounded-[10px] pl-2 mt-4 mx-0 lg:mx-2 sm:md:mx-0 lg:flex-row items-center pb-8 lg:mt-10 w-full lg:w-[900px] justify-between gap-4">
    <div className='bg-white'>
      <div className="flex gap-4 w-full  lg:w-[366px] h-[46px] lg:h-[56px] items-center">
        <div className="w-[14px] h-[14px] rounded-full bg-[#3563E9] border-[#AEC8FC] border-[2px]"></div>
        <p className="text-[16px] font-semibold">Pick - Up</p>
      </div>
      <div className="flex  lg:flex-row gap-4">
        <div>
          <p className="font-bold text-[16px]">Location</p>
          <div className="flex gap-2">
            <p className="text-[#90A3BF] text-[12px] hidden lg:block mt-2">Select Your city</p>
            <p className="text-[#90A3BF] text-[12px] mt-2 lg:hidden sm:block">Semarang</p>
            <select className="mt-2 bg-white" name="Select Your City" id=""></select>
          </div>
        </div>
        <div>
          <p className="font-bold text-[16px]">Location</p>
          <div className="flex gap-2">
          <p className="text-[#90A3BF] text-[12px] hidden lg:block mt-2">Select Your city</p>
            <p className="text-[#90A3BF] text-[12px] mt-2 lg:hidden sm:block">20 July 2022</p>
            <select className="mt-2 bg-white" name="Select Your City" id=""></select>
          </div>
        </div>
        <div>
          <p className="font-bold text-[16px]">Location</p>
          <div className="flex gap-2">
          <p className="text-[#90A3BF] text-[12px] hidden lg:block mt-2">Select Your city</p>
            <p className="text-[#90A3BF] text-[12px] mt-2 lg:hidden sm:block">07.00</p>
            <select className="mt-2 bg-white" name="Select Your City" id=""></select>
          </div>
        </div>
      </div>
    </div>
    <div className="h-auto lg:h-[136px] flex items-center">
      <div className="h-[60px] w-[60px] flex items-center justify-center gap-1 text-white rounded-[4px] bg-[#3563E9]">
        <i className="text-[18px] fa-solid fa-arrow-up"></i>
        <i className="text-[18px] rotate-[90deg] fa-solid fa-arrow-right"></i>
      </div>
    </div>
   
   {/* sec loc */}
   <div className="flex flex-col">
  <div className="flex flex-col lg:flex-row pl-2 bg-white rounded-[10px] items-center lg:mt-0 w-full  justify-between gap-4">
    <div>
      <div className="flex gap-4 w-full  lg:w-[376px] h-[56px] items-center">
        <div className="w-[14px] h-[14px] rounded-full bg-[#3563E9] border-[#AEC8FC] border-[2px]"></div>
        <p className="text-[16px] font-semibold">Drop - Off</p>
      </div>
      <div className="flex  lg:flex-row gap-4">
        <div className='flex justify-center flex-col'>
          <p className="font-bold text-[16px]">Location</p>
          <div className="flex gap-2">
            <p className="text-[#90A3BF] text-[12px] hidden lg:block mt-2">Select Your city</p>
            <p className="text-[#90A3BF] text-[12px] mt-2 lg:hidden sm:block">Semarang</p>
            <select className="mt-2 bg-white" name="Select Your City" id=""></select>
          </div>
        </div>
        <div>
          <p className="font-bold text-[16px]">Location</p>
          <div className="flex gap-2">
          <p className="text-[#90A3BF] text-[12px] hidden lg:block mt-2">Select Your city</p>
            <p className="text-[#90A3BF] text-[12px] mt-2 lg:hidden sm:block">20 July 2022</p>
            <select className="mt-2 bg-white" name="Select Your City" id=""></select>
          </div>
        </div>
        <div>
          <p className="font-bold text-[16px]">Location</p>
          <div className="flex gap-2">
          <p className="text-[#90A3BF] text-[12px] hidden lg:block mt-2">Select Your city</p>
            <p className="text-[#90A3BF] text-[12px] mt-2 lg:hidden sm:block">07.00</p>
            <select className="mt-2 bg-white" name="Select Your City" id=""></select>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    {/* Product Section */}

<div className="flex flex-wrap justify-center gap-4 mt-5">
{data.map((d,index)=>(
  <div key={index}> 
    <div className="flex flex-col w-[304px] sm:w-[280px] md:w-[304px] lg:w-[290px] rounded-[10px] max-w-xs overflow-hidden border border-gray-100 bg-white shadow-md h-[368px] sm:h-[368px] md:h-[368px] lg:h-[368px]">
        {/* Header */}
        <div className="h-[48px] w-full flex items-center justify-center">
          <div className="flex justify-between items-center px-4 pt-4 w-full h-[48px]">
            <div className="flex flex-col">
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-[700] text-[#1A202C]">
                {d.name}
              </p>
              <p className="text-[10px] sm:text-[12px] md:text-[14px] font-[700] text-[#90A3BF] tracking-[-.2%]">
                {d.type}
              </p>
            </div>
            <i className="fa-solid fa-heart text-[#ED3F3F] bg-white p-2 rounded-full shadow-md"></i>
          </div>
        </div>
        {/* Image */}
        <div className="h-[200px] w-full flex items-center justify-center">
          <Image
            className="imge h-[200px] object-contain lg:object-contain w-[200px] sm:h-[230px] sm:w-[230px] md:h-[240px] md:w-[240px] lg:h-[208px] lg:w-[200px]"
            height={200}
            width={200}
            src={d.imgurl}
            alt="my pic"
          />
        </div>
        {/* Specifications */}
        <div className="h-[24px] w-full flex items-center justify-center">
          <div className="flex justify-between w-[256px] h-[24px]">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-gas-pump text-[14px] sm:text-[16px] text-[#90A3BF]"></i>
              <p className="text-[12px] sm:text-[14px]">{d.specification}</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="h-[18px] sm:h-[20px] w-[18px] sm:w-[20px]"
                src="/wheel.jpg"
                alt=""
              />
              <p className="text-[12px] sm:text-[14px]">{d.cartype}</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="h-[18px] sm:h-[20px] w-[18px] sm:w-[20px]"
                src="/profile.jpg"
                alt=""
              />
              <p className="text-[12px] sm:text-[14px]">{d.person}</p>
            </div>
          </div>
        </div>
        {/* Pricing and Button */}
        <div className="w-full flex items-center justify-between">
          <div className="mt-4 w-full gap-12 justify-center flex font-sans h-[48px]">
            <a href="#">
              <h5 className="text-[16px] sm:text-[18px] md:text-[20px] font-[700] text-gray-900">
                {d.price}
                <span className="text-[10px] sm:text-[12px] md:text-[14px] font-[700] text-[#90A3BF]">
                  {d.days}
                </span>
              </h5>
              <p className="text-[10px] sm:text-[12px] md:text-[14px] font-[700] text-[#90A3BF]">
                $80.00
              </p>
            </a>
            <button className="w-[80px] sm:w-[100px] md:w-[116px] rounded-[4px] h-[36px] sm:h-[40px] md:h-[44px] bg-[#3563E9] text-[12px] sm:text-[14px] md:text-[16px] font-[600] tracking-[-2%] text-white">
              {d.buttontext}
            </button>
          </div>
        </div>
     </div>
     </div>
 ) )}
 <div className='w-full flex items-start'>
  <div className=' mt-12 flex items-start justify-start' >
  <h1 className='text-[16px] font-[600] text-[#90A3BF]'>Recommendation Car</h1>
  </div>
  </div>
  {/* product section */}
{/* Product Section */}
<div className="flex flex-wrap justify-evenly gap-4 mt-5">
  {data2.map((d, index) => (
    <div key={index}>
      <div className="flex flex-col w-[304px] sm:w-[280px] md:w-[304px] lg:w-[290px] rounded-[10px] max-w-xs overflow-hidden border border-gray-100 bg-white shadow-md h-[368px] sm:h-[368px] md:h-[368px] lg:h-[368px]">
        {/* Header */}
        <div className="h-[48px] w-full flex items-center justify-center">
          <div className="flex justify-between items-center px-4 pt-4 w-full h-[48px]">
            <div className="flex flex-col">
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-[700] text-[#1A202C]">
                {d.name}
              </p>
              <p className="text-[10px] sm:text-[12px] md:text-[14px] font-[700] text-[#90A3BF] tracking-[-.2%]">
                {d.type}
              </p>
            </div>
            <i className="fa-solid fa-heart text-[#ED3F3F] bg-white p-2 rounded-full shadow-md"></i>
          </div>
        </div>
        {/* Image */}
        <div className="h-[200px] w-full flex items-center justify-center">
          <Image
            className="imge h-[200px] w-[200px] sm:h-[230px] sm:w-[230px] md:h-[240px] md:w-[240px] object-contain lg:object-contain lg:h-[208px] lg:w-[200px]"
            height={400}
            width={400}
            src={d.imgurl}
            alt="my pic"
          />
        </div>
        {/* Specifications */}
        <div className="h-[24px] w-full flex items-center justify-center">
          <div className="flex justify-between w-[256px] h-[24px]">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-gas-pump text-[14px] sm:text-[16px] text-[#90A3BF]"></i>
              <p className="text-[12px] sm:text-[14px]">{d.specification}</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="h-[18px] sm:h-[20px] w-[18px] sm:w-[20px]"
                src="/wheel.jpg"
                alt=""
              />
              <p className="text-[12px] sm:text-[14px]">{d.cartype}</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="h-[18px] sm:h-[20px] w-[18px] sm:w-[20px]"
                src="/profile.jpg"
                alt=""
              />
              <p className="text-[12px] sm:text-[14px]">{d.person}</p>
            </div>
          </div>
        </div>
        {/* Pricing and Button */}
        <div className="w-full flex items-center justify-between">
          <div className="mt-4 w-full gap-12 justify-center flex font-sans h-[48px]">
            <a href="#">
              <h5 className="text-[16px] sm:text-[18px] md:text-[20px] font-[700] text-gray-900">
                {d.price}
                <span className="text-[10px] sm:text-[12px] md:text-[14px] font-[700] text-[#90A3BF]">
                  {d.days}
                </span>
              </h5>
              <p className="text-[10px] sm:text-[12px] md:text-[14px] font-[700] text-[#90A3BF]">
                $80.00
              </p>
            </a>
            <button className="w-[80px] sm:w-[100px] md:w-[116px] rounded-[4px] h-[36px] sm:h-[40px] md:h-[44px] bg-[#3563E9] text-[12px] sm:text-[14px] md:text-[16px] font-[600] tracking-[-2%] text-white">
              {d.buttontext}
            </button>
          </div>
        </div>
      </div>
      </div>
      
    
  ))}

      </div>
      </div>
      
    

  {/* product section */}

    </div>
    
    </div>
    </div>
  )
}

export default SecondPage