import React, {useState} from 'react'

const Register = () => {
const [password ,setPassword] = useState ('');
const [confirmPassword ,setConfirmPassword] = useState ('');


 const handlePasswordChange = (e) =>{
setPassword(e.target.value)
 }



 const handleConfirmPassowrd = (e) => {
    setConfirmPassword(e.target.value)
 }
 const handleSubmit= (e) =>{
    e.preventDefault(); // Prevent the default form submission behavior
    if (password === confirmPassword) {
        alert( "Registered Successfully")
    } else
    alert ("Password didn't match ")
 }
  return (
    <form onSubmit={handleSubmit}>
    <div className=''>
    <div className='container px-4 lg:px-0' >
     <div className='lg:flex gap-36 items-center'>

<img src='/images/SignIn.jpg' className=' mt-[4rem] w-[40rem]' />
<div className=''>
<h1 className='font-semibold my-[2rem] text-24'>REGISTER</h1>   

<input required type='text'  className='border border-gray-500 w-96 px-2 py-2 rounded-md mb-8 ' placeholder='Please enter your username' />
<input required type='email' className='border border-gray-500 w-96 px-2 py-2 rounded-md mb-8 ' placeholder='Please enter your Email' />
<div className='flex justify-between '>
</div>
<div>
<input required type='password'        value={password}
          onChange={handlePasswordChange} className='border border-gray-500 w-96 px-2 py-2 rounded-md mb-8  ' placeholder='Please enter your Password' /> </div>
<div className='flex justify-between '>
</div>
<div>
<input required type='password'        value={confirmPassword}
          onChange={handleConfirmPassowrd}  className='border border-gray-500 w-96 px-2 py-2 rounded-md mb-8  ' placeholder='Please confirm your Password' /> </div>
          <div>

<input required type='checkbox' />
<label className='text-gray-400 text-sm  ml-4'>I accept all terms & conditions </label>


</div>
<div className='text-cemter'>
<button type='submit' className='w-96 bg-[#042893] px-2 py-3 my-4 text-white'>Sign In</button>
    <p className='font-semibold '>Already have an account? <span className='text-[#042893]'> Login Now</span> </p>
    </div>
</div> </div>
    </div>
  </div>
  </form>
  )
}

export default Register
