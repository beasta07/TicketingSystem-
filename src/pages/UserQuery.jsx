import  { useState } from 'react';
import { IoMdCloudUpload } from "react-icons/io";

const UserQuery = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleRemoveFile = () => {
    setFile(null);
    // Clear the file input value to trigger change event and clear file name display
    document.getElementById('upload').value = '';
  };

  return (
    <div>
    <div className='mx-32 border border-gray-300 shadow-md my-16' >
      <div className='text-center'>
        <h1 className='text-4xl mt-[3rem] font-semibold'>Upload Your Query</h1>
      </div>
      <hr className='border-t border-gray-300  my-[2rem]' />
      <div className='bg-white '>
        <form action='/submit' method='post'>
        <div className='mx-16'>
          <div className='mb-4 flex gap-40'>
            <label htmlFor='subject' className='block w-52 mt-2 font-semibold text-gray-700'>
            Ticket Subject *
            </label>
            <input
              id='subject'
              name='subject'
              type='text'
              className='border border-gray-200 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter subject'
            />
          </div>
          <div className='mb-4 flex gap-40'>
            <label htmlFor='subject' className='block w-52 mt-2 font-semibold text-gray-700'>
            Email Address *
            </label>
            <input
              id='subject'
              name='subject'
              type='email'
              className='border border-gray-200 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter email'
            />
          </div>
          <div className='mb-4 flex gap-40'>
            <label htmlFor='subject' className='block w-52 mt-2 font-semibold text-gray-700'>
            Ticket Description    *
            </label>
            
            <textarea
              id='description'
              name='description'
              rows='6'
              className='border border-gray-200 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter description'
            ></textarea>
          </div>
          <div className='mb-4 flex gap-40'>
            <label htmlFor='upload' className='block w-52 mt-2 font-semibold text-gray-700'>
            Attachment *
            </label>
            <div className='border border-dashed border-gray-500 bg-[#FBFCFF] px-5 py-6 w-full mx-auto text-center'>
              <div className='flex flex-col items-center'>
                <IoMdCloudUpload className='text-4xl text-gray-500 mb-2' />
                <input
                  type='file'
                  id='upload'
                  name='upload'
                  accept='image/*, video/*'
                  className='hidden'
                  onChange={handleFileChange}
                />
                <label
                  htmlFor='upload'
                  className='  px-4 py-2 rounded-md font-semibold text-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer'
                >
                  {file ? file.name : 'Upload a  File'}
                </label>
                {file && (
                  <button
                    type='button'
                    className='mt-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'
                    onClick={handleRemoveFile}
                  >
                    Remove
                  </button>
                )}
                <p className='text-gray-600'>Drag and drop files here</p>
                
                              </div>
            </div>
          </div>
          </div>
          <hr className='border-t border-gray-300 my-[2rem] mx-auto ' />
          <div className='text-center my-[2rem]'>
          <button
            type='submit'
            className='bg-[#042893] text-white px-16 py-2 mx-auto rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2  focus:ring-blue-500'
          >
            Submit
          </button></div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default UserQuery;
