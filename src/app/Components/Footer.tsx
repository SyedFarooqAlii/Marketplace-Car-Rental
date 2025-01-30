import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-[#FFFFFF]'>
   <div className="flex flex-col lg:flex-row mt-36 mx-6 justify-between">
    <div className="w-full lg:w-[292px] h-auto lg:h-[108px] space-y-[16px] mb-6 lg:mb-0">
      <h1 className="text-[32px]  font-bold text-[#3563E9]">MORENT</h1>
      <p className="text-[16px] font-[500] text-black opacity-40">
        Our vision is to provide convenience and help increase your sales business.
      </p>
    </div>
    <div className="flex flex-col pt-3 lg:flex-row gap-8 lg:gap-16">
      <div className="h-auto  lg:h-[244px] space-y-4 w-full lg:w-[152px]">
        <h1 className="text-[20px] font-[600] text-[#1A202C]">About</h1>
        <p className="text-[16px] font-[500] text-[#1A202C] opacity-40">How it works</p>
        <p className="text-[16px] font-[500] text-[#1A202C] opacity-40">Featured</p>
        <p className="text-[16px] font-[500] text-[#1A202C] opacity-40">Partnership</p>
        <p className="text-[16px] font-[500] text-[#1A202C] opacity-40">Business Relation</p>
      </div>
      <div className="h-auto lg:h-[244px] w-full lg:w-[152px] space-y-4">
        <h1 className="text-[20px] font-[600] text-[#1A202C]">Community</h1>
        <p className="text-[16px] font-[500] text-[#1A202C] opacity-40">Events</p>
        <p className="text-[16px] font-[500] text-[#1A202C] opacity-40">Blogs</p>
        <p className="text-[16px] font-[500] text-[#1A202C] opacity-40">Podcast</p>
        <p className="text-[16px] font-[500] text-[#1A202C] opacity-40">Invite a friend</p>
      </div>
      <div className="h-auto lg:h-[244px] space-y-4 w-full lg:w-[152px]">
        <h1 className="text-[20px] font-[600] text-[#1A202C]">Socials</h1>
        <p className="text-[16px] font-[500] text-[#1A202C] opacity-40">Discord</p>
        <p className="text-[16px] font-[500] text-[#1A202C] opacity-40">Instagram</p>
        <p className="text-[16px] font-[500] text-[#1A202C] opacity-40">Twitter</p>
        <p className="text-[16px] font-[500] text-[#1A202C] opacity-40">Facebook</p>
      </div>
    </div>
  </div>
  {/* sec */}
  <div className="flex flex-col lg:flex-row mt-8 mr-4 mb-12 items-center justify-between">
    <div className="flex mb-4 lg:mb-0">
      <p className="text-[#1A202C] ml-0 lg:ml-2 text-[16px] font-[600]">
        ©2022 MORENT. All rights reserved
      </p>
    </div>
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-24">
      <p className="text-[#1A202C] text-[16px] font-[600]">Privacy & Policy</p>
      <p className="text-[#1A202C] text-[16px] font-[600]">Terms & Condition</p>
    </div>
  </div>
</div>

    
  )
}

export default Footer