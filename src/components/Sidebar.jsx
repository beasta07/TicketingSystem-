import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { AiFillAlipayCircle } from "react-icons/ai";
import { AiFillFunnelPlot } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { AiFillPlusSquare } from "react-icons/ai";
import { AiFillProfile } from "react-icons/ai";
import { AiFillIdcard } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className='h-[43rem] bg-[#12344D]'>
           <div className='w-16 h-full bg-[#12344D]  ' >
        <div className='bg-[#0E2A3E] p-4'>
            <FaRegCircleUser className='text-white text-[1.5rem]'/>

        </div>
        <div className=' p-4'>
            <AiFillAlipayCircle className='text-white text-[1.5rem]'/>

        </div>
        <div className='bg-[#12344D] p-4'>
            <AiFillFunnelPlot className='text-white text-[1.5rem]'/>

        </div>
        <div className='bg-[#12344D] p-4'>
            <AiFillMessage className='text-white text-[1.5rem]'/>

        </div>
        <div className='bg-[#12344D] p-4'>
            <AiFillPlusSquare className='text-white text-[1.5rem]'/>

        </div>
        <div className='bg-[#12344D] p-4'>
            <AiFillProfile className='text-white text-[1.5rem]'/>

        </div>
        <div className='bg-[#12344D] p-4'>
            <AiFillIdcard className='text-white text-[1.5rem]'/>

        </div>
        <div className='bg-[#12344D] p-4'>
            <AiFillSetting className='text-white text-[1.5rem]'/>

        </div>
        </div>
    </div>
  )
}

export default Sidebar
