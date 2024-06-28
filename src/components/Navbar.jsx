import { IoMdSearch } from 'react-icons/io';
import { CiChat1 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";


const Navbar = () => {
  return (
    <div className='w-full h-1'>
    <div className='flex justify-between w-full p-2'>
      <div className='font-semibold text-[black] text-lg'>
        <h1>My Dashboard</h1>
      </div>
      <div className='flex font-semibold text-[black] gap-4 text-lg'>
        <div className='flex items-center bg-white-100 border border-black h-9 rounded-lg px-2 py-2'>
          <IoMdSearch className='text-[1.25rem]' />
          <input
            placeholder='Search'
            className='bg-white focus:outline-none text-black ml-2 w-32 h-4 font-normal'
          />
        </div >
        <p>Roles</p>
        <CiChat1 className='text-black text-[1.85rem] mt-1' />
        <IoIosNotificationsOutline className='text-black text-[1.85rem] mt-1' />
        <CiUser className='text-black text-[1.85rem] mt-1' />
      </div>
    </div>
    <hr className='border-t border-gray-300 mx-auto mt-1 opacity-50' />
    <div className='bg-[#F5F7F9] py-5 flex gap-10 p-4'>
      <div className='flex gap-4'>
        <p>Accounts</p>
        <MdKeyboardArrowDown className='mt-2' />    

      </div>
      <div className='flex gap-4'>
        <p>All Groups</p>
        <MdKeyboardArrowDown className='mt-2' />
      </div>
    </div>
    </div>
  );
}

export default Navbar;
