import React from 'react'
import { FiPhone } from "react-icons/fi";
import { RiArrowGoBackFill } from "react-icons/ri";
const Comment = () => {
  return (
    <div className='container'>
 <div className='flex mt-16 gap-6'>
    <div>
        <FiPhone className='text-xl mt-2'/>
    </div>
    <div>
        <h1 className='font-bold text-xl'>Email Address Change</h1>
    </div>
 </div>
 <div className='flex my-8 gap-3'>
    <div>
    <img src='/public/images/user2.jpg' className='rounded-xl' / > 
    </div>
    <div>
<h1 className='text-[#042893] font-semibold text-lg'>  Emily Garcia  <span className='font-normal text-black'>reported via phone </span>    </h1>
<p className='text-gray-700 italic'>
9 days ago (Tue, 18 Jun 2024 at 9:27 PM)
</p>
 </div>
 </div>
 <div className='flex gap-4 py-4'>
    <div>
    <FiPhone className='text-base mt-2'/>

    </div>
    <div className=''>
<p>Hi , </p>
<p className='leading-10'>I need to update my email address. I want to know if I'll lose access to my account if I change it. I've added quite a few products to my cart and don't want to look for them again.

It would be great to continue using this account with my new email address. Please let me know if that's possible.
<br/>
Regards,
<br/>

Emily Garcia</p>
    </div>
   
 </div>
 <div className='flex bg-[#F5F7F9] w-full rounded-xl'>
<div>
    <img src='/public/images/P.png' className='w-6 py-1 my-2 mx-4' />
</div>
 <div className='flex'>
    <button className='px-6 bg-white  py-1 rounded-md my-2 border border-gray-300 mr-4 hover:bg-gray-50'>   
          {/* <RiArrowGoBackFill className='text-'/> */}
    Reply</button>
 </div>
 <div>
    <button className='px-6 bg-white  py-1 rounded-md my-2 border border-gray-300 hover:bg-gray-50'>Forward</button>
 </div>

    </div>
    </div>
  )
}

export default Comment
