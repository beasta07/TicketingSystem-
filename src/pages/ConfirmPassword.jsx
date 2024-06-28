import {useState} from 'react'

const ConfirmPassword = () => {
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

<div className='bg-[#042893] h-full'>
      <p className='text-center text-white py-12 text-2xl font-bold'>Forget Password</p>
 <div className='bg-white text-center w-[30rem] my-8 py-8 mx-auto px-10'>
<p className='text-center text-[#042893] text-2xl font-bold mb-8'>New Password</p>
{/* <p className='text-center text-gray-600 my-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elite Lorem ipsum dolor sit amet. .</p> */}
<input  value={password}
          onChange={handlePasswordChange}className='p-3 my-2 px-auto w-full border border-blue-800' type='password'  placeholder='Enter your new Password' />
<input  value={confirmPassword}
          onChange={handleConfirmPassowrd}className='p-3 my-2 px-auto w-full border border-blue-800' type='password'  placeholder='Confirm your Password' />
<div className='text-center'>
<button type='submit' className='px-14 py-4 my-4 bg-[#042893] text-white'>Reset my Password</button>
</div>
 </div>
 <div className='lg:flex lg:container px-[2rem] text-white justify-between pb-8 pt-[8.3rem]  ' >
            <div className='hidden lg:block' >

@2024 Ecommerce Collection. All Rights Reserved

Privacy Policy | Terms & Conditions

</div>
<div className='text-white text-center'>Designed & Developed By <span className='font-semibold lg:font-normal'>SysQube Technologies</span>
    </div>
    </div>
    </div>
    </form>
  )
}

export default ConfirmPassword
