import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { TiUserAddOutline } from "react-icons/ti";

const Roles = () => {
  const [showForm, setShowForm] = useState(false); // State to manage form visibility
  const [newRole, setNewRole] = useState({
    userName: '',
    email: '',
    address: '',
    phoneNumber: '',
    role: '',
    imageSrc: '', // Default image or empty string
  });
  const [rolesData, setRolesData] = useState([
    {
      id: 1,
      userName: 'Pranish Bista',
      address: '123 Main St, Anytown, USA',
      phoneNumber: '+1-234-567-8901',
      role: 'Admin',
      imageSrc: '/images/user1.jpeg',
    },
    {
      id: 2,
      userName: 'Emily Garcia',
      address: '456 Elm St, Othertown, USA',
      phoneNumber: '+1-987-654-3210',
      role: 'Customer Support',
      imageSrc: '/images/user2.jpg',
    },
  ]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleInputChange = (event) => {
    if (event.target.name === 'image') {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewRole({ ...newRole, imageSrc: reader.result });
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      const { name, value } = event.target;
      setNewRole({ ...newRole, [name]: value });
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newRoleId = rolesData.length + 1;
    const updatedRolesData = [
      ...rolesData,
      {
        id: newRoleId,
        userName: newRole.userName,
        address: newRole.address,
        phoneNumber: newRole.phoneNumber,
        role: newRole.role,
        imageSrc: newRole.imageSrc,
      },
    ];

    setRolesData(updatedRolesData);
    setShowForm(false); // Hide the form after submission
    setNewRole({
      userName: '',
      email: '',
      address: '',
      phoneNumber: '',
      role: '',
      imageSrc: '', // Reset image to default or empty string
    });
  };

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col w-full'>
        <Navbar />
        <div className='mt-[8rem] container relative'>
          {/* Dark overlay */}
          {showForm && (
            <div
              className='fixed inset-0 bg-black opacity-50 z-50'
              onClick={toggleForm}
            ></div>
          )}
          <div className='my-8 flex justify-between items-center'>
            <h1 className='text-xl font-semibold'>All Users</h1>
            <button
              className='bg-[#042893] text-white px-8 py-3 font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
              onClick={toggleForm}
            >
              Create a Role
            </button>
          </div>
          {/* Form Container */}
          <div className={`fixed top-0 right-0 h-full bg-white w-[40%] border border-gray-200 p-8 transition-transform transform ${showForm ? 'translate-x-0' : 'translate-x-full'} duration-300 z-50`}>
            <div className='rounded px-8 pt-6 pb-8 mb-4'>
              <form onSubmit={handleFormSubmit}>
                <div className='mb-4'>
                  <div className='flex gap-3'>
                    <TiUserAddOutline className='mt-1 text-3xl'/>
                    <h1 className='text-3xl font-semibold'>New Contact</h1> 
                  </div>
                  <p className='text-gray-700 py-3'>You can create New contacts here that will be registered</p>
                </div>
                <div className='mb-4 flex items-center'>
                  <div className='flex gap-5'>
                    <img
                      src={newRole.imageSrc || '/images/upload.png'} // Display chosen or default image
                      alt='Upload Photo'
                      className='w-12 h-12 object-cover rounded-md'
                    />
                    <div>
                      <label htmlFor='upload-photo' className='text-lg text-blue-800 py-1  rounded-md cursor-pointer '>
                        Upload Photo
                      </label>
                      <input
                        id='upload-photo'
                        type='file'
                        accept='image/*'
                        className='hidden'
                        name='image'
                        onChange={handleInputChange}
                        required
                      />
                      <p className='text-sm text-gray-700'>An image of the person, it's best if it has the same length and height</p>
                    </div>
                  </div>
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm mb-2'>Full Name</label>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type='text'
                    placeholder='Enter the name of this person'
                    name='userName'
                    value={newRole.userName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm mb-2'>Email</label>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type='email'
                    placeholder='Enter their email'
                    name='email'
                    value={newRole.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm mb-2'>Address</label>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type='text'
                    placeholder='Enter their address'
                    name='address'
                    value={newRole.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm mb-2'>Phone Number</label>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type='text'
                    placeholder='Phone Number'
                    name='phoneNumber'
                    value={newRole.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm mb-2'>Role</label>
                  <select
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    name='role'
                    value={newRole.role}
                    onChange={handleInputChange}
                    required
                  >
                    <option value=''>Select Role</option>
                    <option value='Staff'>Staff</option>
                    <option value='Support'>Support</option>
                    <option value='Project Lead'>Project Lead</option>
                  </select>
                </div>
                <div className='flex items-center justify-between'>
                  <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    type='button'
                    onClick={toggleForm}
                  >
                    Cancel
                  </button>
                  <button
                    className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    type='submit'
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Displaying Roles */}
          {rolesData.map((role) => (
            <div key={role.id} className='bg-white rounded-lg shadow-md mb-4 p-4 flex items-center'>
              <img src={role.imageSrc} className='rounded-full w-16 h-16 mr-4' alt={`${role.userName}'s profile`} />
              <div className='flex justify-between w-full'>
                <p className='font-semibold'>{role.userName}</p>
                <p className='text-sm text-gray-600'>{role.address}</p>
                <p className='text-sm text-gray-600 w-60 text-left'>{role.phoneNumber}</p>
                <p className='text-sm text-gray-600'>{role.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roles;
