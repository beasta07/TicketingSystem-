import React from 'react'

const Login = () => {
  return (
    <div>
      <div className='container'>
       <div className='flex gap-36 items-center'>

<img src='/images/SignIn.jpg' className=' mt-[4rem] w-[40rem]' />
<div className=''>
<h1 className='font-semibold mt-[4rem] text-[1.5rem]'>LOGIN</h1> 
<p className='text-gray-500 py-6'>Welcome back! Please sign in to continue.</p>
<p className='my-4'>Email</p>
<input type='email' className='border border-gray-500 w-96 px-2 py-2 rounded-md mb-8 ' placeholder='Please enter your Email' />
<div className='flex justify-between '>
<p className='my-4'>Password</p>
<p className='my-4 text-blue-500'>Forget Password?</p>
</div>
<div>
<input type='password' className='border border-gray-500 w-96 px-2 py-2 rounded-md mb-8  ' placeholder='Please enter your Password' /> </div>
 <button className='w-96 bg-[#042893] px-2 py-3 text-white'>Sign In</button>
</div> </div>
      </div>
    </div>
  )
}

export default Login
