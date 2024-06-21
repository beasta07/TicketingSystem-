
const ClientDashboard = () => {
  return (
    <div className='bg-gray-100 mt-[4rem] py-4'>
      <div className='container bg-white shadow-md rounded-md px-4  py-3 ' >
      <div className='flex justify-between'>
            <div className='flex gap-4'>
               <img src='/images/ticket.svg' className='w-[3rem]' /> 
               <h1 className='font-bold text-xl mt-2'>Ticket Ease</h1>
            </div>

            <div className='flex gap-6'>
                <p className='mt-3'>Raise Ticket</p>
                <p className='mt-3'>VIew Ticket</p>
                <p className='rounded-full p-3 bg-gray-200'>New Ticket</p>
                <p className='rounded-full p-3  bg-gray-200'> Ticket History </p>
            </div>
        </div>
    </div>
     <div className='container mt-16'>
        <div className='flex gap-16'>
            <div className='mt-32'>
                <h1 className='text-7xl font-bold w-[26rem] py-4 leading-[6rem]'>Welcome to TicketEase</h1>
                <p className='my-8 text-2xl text-gray-700 w-[45rem]'> Your one-stop hub for managing support requests, tracking ticket statuses and fostering customer relationships.</p>
                <button className='w-72 bg-[#042893] px-2 py-3 text-white'>Raise a Ticket</button>

            </div>
            <div>
                <img src='/images/CustomerDashboard.jpeg' className='w-[30rem]'/>
            </div>
        </div>
        <div className='container'>
    <div className=' my-[4rem]'>
        <p className='font-semibold text-3xl mt-32'>Transaction History</p>
        <p className='text-gray-700 mt-5'>View all your past records and Queries </p>
        </div>
 <div className='bg-white grid   py-4 shadow-md rounded-t-xl  grid-cols-7  font-semibold text-center'>
<h1>User ID </h1>
<h1>User Name </h1>
<h1>Issue Name </h1>
<h1>Issue Date </h1>
<h1>Handled Date </h1>
<h1>Urgency </h1>
<h1>Status</h1>

 </div>
<hr className='boder border-gray-200'/>
 <div className='bg-white grid   py-4 shadow-md   grid-cols-7 text-center'>
<h1 className='text-[blue]'>110101 </h1>
<h1>Jack </h1>
<h1>Save Error</h1>
<h1> 2024/6/21 </h1>
<h1>2024/6/26 </h1>
<h1>Low </h1>
<h1>Resolved</h1>


 </div>
<hr className='boder border-gray-200'/>
<div className='bg-white grid   py-4 shadow-md   grid-cols-7 text-center'>
<h1 className='text-[blue]'>110104 </h1>
<h1>Ram </h1>
<h1>Login Issue</h1>
<h1> 2024/2/11 </h1>
<h1>2024/2/21 </h1>
<h1>High </h1>
<h1>Waiting for Client Info</h1>


 </div>
<hr className='boder border-gray-200'/>
<div className='bg-white grid   py-4 shadow-md   grid-cols-7 text-center'>
<h1 className='text-[blue]'>117177 </h1>
<h1>David </h1>
<h1>System Error</h1>
<h1> 2024/6/1 </h1>
<h1>2024/6/6 </h1>
<h1>Low </h1>
<h1>Pending</h1>


 </div>
<hr className='boder border-gray-200'/>
<div className='bg-white grid   py-4 shadow-md   grid-cols-7 text-center'>
<h1 className='text-[blue]'>110111 </h1>
<h1>Dev </h1>
<h1>WhiteScreen</h1>
<h1> 2024/5/11 </h1>
<h1>2024/6/1 </h1>
<h1>Medium </h1>
<h1>Resolved</h1>


 </div>
<hr className='boder border-gray-200'/>
<div className='bg-white grid   py-4 shadow-md   grid-cols-7 text-center'>
<h1 className='text-[blue]'>110113 </h1>
<h1>Sagar </h1>
<h1>Save Error</h1>
<h1> 2024/6/21 </h1>
<h1>2024/6/26 </h1>
<h1>Low </h1>
<h1>Resolved</h1>


 </div>
<hr className='boder border-gray-200 mb-16'/>

 </div>
        </div>
    </div>
  )
}

export default ClientDashboard
