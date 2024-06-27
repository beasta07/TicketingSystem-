import React from 'react'
import Navbar from '../../components/Navbar'

const CreatePages = () => {
  return (
    <div>
     <Navbar/> 
     <div className=''>
 <div className='container mt-8'>
  <div className='flex justify-between'>
    <div>
        <h1 className='font-semibold text-2xl'>Create Account</h1>
    </div>
    <div>
    <button className='w-20 rounded-lg bg-[#042893] px-1 py-2 font-semibold text-white my-2'>Save</button>
    </div>
  </div>

 </div>
  <hr className='border-t border-gray-300 mx-auto mt-1 opacity-50' />
  <div className='container mt-8'>
  <h1 className='font-semibold '> Account Information</h1>
  <div className=' my-4'>

  <label className='text-gray-600'>Account Name</label>
  <input type='text' className='w-96 border border-black ml-12 p-2'/>
  </div>
  <div className=' my-4 '>

  <label className='text-gray-600'>Account Type</label>
  <input type='text' className='w-96 border border-black ml-14 p-2'/>
  </div>

 </div></div>
    </div>
  )
}

export default CreatePages
