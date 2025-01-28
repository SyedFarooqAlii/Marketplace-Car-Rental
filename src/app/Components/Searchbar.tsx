import React from 'react'

const Searchbar = ({width}:any) => {
  return (
    <div className='bg-white rounded-full'>
        <div className={`flex items-center lg:ml-8 space-x-4 border px-2 py-1 rounded-full ${width}`}>
<i className=" text-[#596780] fa-solid fa-magnifying-glass"></i>
<input type="text" placeholder='Search something here' className='w-full bg-transparent outline-none' />
<img className='w-5' src="/filter.jpg" alt="" />
</div>

    </div>
  )
}

export default Searchbar