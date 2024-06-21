import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { MdOutlineMailOutline } from "react-icons/md";
// import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { MdOutlineAssignment } from "react-icons/md";
import { TbUrgent } from "react-icons/tb";
const AdminTicket = () => {
  const [urgency, setUrgency] = useState('Urgent');
  const [status, setStatus] = useState('Open');
  const [showUrgencyDropdown, setShowUrgencyDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  const urgencyOptions = ['Low', 'Medium', 'High', 'Urgent'];
  const statusOptions = ['Pending', 'Resolved', 'Waiting on customer', 'Open'];

  return (
    <div>
      <div className='flex'>
        <Sidebar />
        <div className='flex flex-col w-full'>
          <Navbar />
          <div className='mt-[8rem] container'>
            <div className='border border-gray-300 py-8 p-4 flex justify-between'>
              <div className='flex'>
                <input type='checkbox' />
                <img src='/images/user1.jpeg' className='rounded-2xl px-4 w-20 h-12 my-auto' />
                <div className='mx-4'>
                  <div className='border border-red-300 rounded-lg text-[red] bg-[#FFECF0] w-24 my-2 px-3'>Overdue</div>
                  <p className='font-semibold text-sm'>Test Email: Need account statement #3</p>
                  <div className='flex gap-8'>
                    <div className='flex gap-2'>
                      <MdOutlineMailOutline className='mt-1' />
                      <p className='text-sm'>Pranish BIsta</p>
                    </div>
                    <p className='text-sm text-gray-400'>Created a day ago</p>
                    <p className='text-sm text-gray-400'>Overdue in 4 hours</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='flex gap-2 items-center relative'>
                  <TbUrgent className='text-red-500 text-[1.25rem]' />
                  <div onClick={() => setShowUrgencyDropdown(!showUrgencyDropdown)} className='cursor-pointer flex items-center'>
                    {urgency}
                    <IoIosArrowDown className='ml-1' />
                  </div>
                  {showUrgencyDropdown && (
                    <div className='dropdown'>
                      {urgencyOptions.map((option) => (
                        <div key={option} onClick={() => { setUrgency(option); setShowUrgencyDropdown(false); }} className={`p-2 ${option === 'Urgent' ? 'text-red-500' : ''}`}>
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className='flex gap-2 my-2 items-center relative'>
                  <CiUser className='text-[1.25rem]' />
                  Assign
                  <IoIosArrowDown className='ml-1' />
                </div>
                <div className='flex gap-2 items-center relative'>
                  <MdOutlineAssignment className='text-[1.25rem]' />
                  <div onClick={() => setShowStatusDropdown(!showStatusDropdown)} className='cursor-pointer flex items-center'>
                    {status}
                    <IoIosArrowDown className='ml-1' />
                  </div>
                  {showStatusDropdown && (
                    <div className='dropdown'>
                      {statusOptions.map((option) => (
                        <div key={option} onClick={() => { setStatus(option); setShowStatusDropdown(false); }} className='p-2'>
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Repeat the above block for the second ticket */}
            <div className='border border-gray-300 py-8 p-4 flex justify-between'>
              <div className='flex'>
                <input type='checkbox' />
                <img src='/images/user2.jpg' className='rounded-2xl px-4 w-20 h-12 my-auto' />
                <div className='mx-4'>
                  <div className='border border-red-300 rounded-lg text-red bg-[#FFECF0] text-[red] w-40 my-2 px-3'>First response due</div>
                  <p className='font-semibold text-sm'>Test Email: Need account statement #3</p>
                  <div className='flex gap-8'>
                    <div className='flex gap-2'>
                      <MdOutlineMailOutline className='mt-1' />
                      <p className='text-sm'>Pranish BIsta</p>
                    </div>
                    <p className='text-sm text-gray-400'>Created a day ago</p>
                    <p className='text-sm text-gray-400'>Overdue in 4 hours</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='flex gap-2 items-center relative'>
                <TbUrgent className='text-red-500 text-[1.25rem]' />
                <div onClick={() => setShowUrgencyDropdown(!showUrgencyDropdown)} className='cursor-pointer flex items-center'>
                    {urgency}
                    <IoIosArrowDown className='ml-1' />
                  </div>
                  {showUrgencyDropdown && (
                    <div className='dropdown'>
                      {urgencyOptions.map((option) => (
                        <div key={option} onClick={() => { setUrgency(option); setShowUrgencyDropdown(false); }} className={`p-2 ${option === 'Urgent' ? 'text-red-500' : ''}`}>
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className='flex gap-2 my-2 items-center relative'>
                  <CiUser className='text-[1.25rem]' />
                  Assign
                  <IoIosArrowDown className='ml-1' />
                </div>
                <div className='flex gap-2 items-center relative'>
                  <MdOutlineAssignment className='text-[1.25rem]' />
                  <div onClick={() => setShowStatusDropdown(!showStatusDropdown)} className='cursor-pointer flex items-center'>
                    {status}
                    <IoIosArrowDown className='ml-1' />
                  </div>
                  {showStatusDropdown && (
                    <div className='dropdown'>
                      {statusOptions.map((option) => (
                        <div key={option} onClick={() => { setStatus(option); setShowStatusDropdown(false); }} className='p-2'>
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminTicket;
