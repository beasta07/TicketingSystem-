import React from 'react';

const ProjectLeadDashboard = () => {
  return (
    <div className='container'>
      <div className='my-[4rem]'>
        <p className='font-semibold text-3xl mt-32'>Project Lead Dashboard</p>
        <p className='text-gray-700 mt-5'>
          View all the records and Queries and assign right tasks to the right people as well as change the Urgency and Status accordingly
        </p>
      </div>
      <div className='bg-white grid py-4 shadow-md rounded-t-xl grid-cols-7 font-semibold text-center'>
        <h1>User ID</h1>
        <h1>User Name</h1>
        <h1>Issue Name</h1>
        <h1>Issue Date</h1>
        <h1>Urgency</h1>
        <h1>Status</h1>
        <h1>Assigned To</h1>
      </div>
      <hr className='border border-gray-200' />
      <div className='bg-white grid py-4 shadow-md grid-cols-7 text-center'>
        <h1 className=''>110101</h1>
        <h1>Jack</h1>
        <h1>Save Error</h1>
        <h1>2024/6/21</h1>
        <select className='bg-[white]'>
          <option className='text-center'   value='Low'>Low</option>
          <option className='text-center'   value='Medium'>Medium</option>
          <option className='text-center'   value='High'>High</option>
        </select>
        <select className='bg-[white]'>
          <option className='text-center'   value='Resolved'>Resolved</option>
          <option className='text-center'   value='Waiting for Client Info'>Waiting for Client Info</option>
          <option className='text-center'   value='Pending'>Pending</option>
        </select>
        <select className='bg-[white]'>
          <option className='text-center'   value='Test'>Test</option>
          <option className='text-center'   value='Test 2'>Test 2</option>
          <option className='text-center'   value='Test 3'>Test 3</option>
        </select>
      </div>
      <hr className='border border-gray-200' />
      <div className='bg-white grid py-4 shadow-md grid-cols-7 text-center'>
        <h1 className=''>110104</h1>
        <h1>Ram</h1>
        <h1>Login Issue</h1>
        <h1>2024/2/11</h1>
        <select className='bg-white'>
          <option className='text-center'   value='Low'>Low</option>
          <option className='text-center'   value='Medium'>Medium</option>
          <option className='text-center'   value='High'>High</option>
        </select>
        <select className='bg-white'>
          <option className='text-center'   value='Resolved'>Resolved</option>
          <option className='text-center'   value='Waiting for Client Info'>Waiting for Client Info</option>
          <option className='text-center'   value='Pending'>Pending</option>
        </select>
        <select className='bg-white'>
          <option className='text-center'   value='Test'>Test</option>
          <option className='text-center'   value='Test 2'>Test 2</option>
          <option className='text-center'   value='Test 3'>Test 3</option>
        </select>
      </div>
      <hr className='border border-gray-200' />
      <div className='bg-white grid py-4 shadow-md grid-cols-7 text-center'>
        <h1 className=''>117177</h1>
        <h1>David</h1>
        <h1>System Error</h1>
        <h1>2024/6/1</h1>
        <select className='bg-[white]'>
          <option className='text-center'   value='Low'>Low</option>
          <option className='text-center'   value='Medium'>Medium</option>
          <option className='text-center'   value='High'>High</option>
        </select>
        <select className='bg-[white]'>
          <option className='text-center'   value='Resolved'>Resolved</option>
          <option className='text-center'   value='Waiting for Client Info'>Waiting for Client Info</option>
          <option className='text-center'   value='Pending'>Pending</option>
        </select>
        <select className='bg-[white]'>
          <option className='text-center'   value='Test'>Test</option>
          <option className='text-center'   value='Test 2'>Test 2</option>
          <option className='text-center'   value='Test 3'>Test 3</option>
        </select>
      </div>
      <hr className='border border-gray-200' />
      <div className='bg-white grid py-4 shadow-md grid-cols-7 text-center'>
        <h1 className=''>110111</h1>
        <h1>Dev</h1>
        <h1>WhiteScreen</h1>
        <h1>2024/5/11</h1>
        <select className='bg-[white]'>
          <option className='text-center'   value='Low'>Low</option>
          <option className='text-center'   value='Medium'>Medium</option>
          <option className='text-center'   value='High'>High</option>
        </select>
        <select className='bg-[white]'>
          <option className='text-center'   value='Resolved'>Resolved</option>
          <option className='text-center'   value='Waiting for Client Info'>Waiting for Client Info</option>
          <option className='text-center'   value='Pending'>Pending</option>
        </select>
        <select className='bg-[white]'>
          <option className='text-center'   value='Test'>Test</option>
          <option className='text-center'   value='Test 2'>Test 2</option>
          <option className='text-center'   value='Test 3'>Test 3</option>
        </select>
      </div>
      <hr className='border border-gray-200' />
      <div className='bg-white grid py-4 shadow-md grid-cols-7 text-center'>
        <h1 className=''>110113</h1>
        <h1>Sagar</h1>
        <h1>Save Error</h1>
        <h1>2024/6/21</h1>
        <select className='bg-[white]'>
          <option className='text-center'   value='Low'>Low</option>
          <option className='text-center'   value='Medium'>Medium</option>
          <option className='text-center'   value='High'>High</option>
        </select>
        <select className='bg-[white]'>
          <option className='text-center'   value='Resolved'>Resolved</option>
          <option className='text-center'   value='Waiting for Client Info'>Waiting for Client Info</option>
          <option className='text-center'   value='Pending'>Pending</option>
        </select>
        <select className='bg-[white]'>
          <option className='text-center'   value='Test'>Test</option>
          <option className='text-center'   value='Test 2'>Test 2</option>
          <option className='text-center'   value='Test 3'>Test 3</option>
        </select>
      </div>
      <hr className='border border-gray-200 mb-16' />
      <div className='text-center'>
      <button
                    className='bg-[#042893] hover:bg-blue-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    type='submit'
                  >
                    Save
                  </button></div>
    </div>
  );
};

export default ProjectLeadDashboard;

