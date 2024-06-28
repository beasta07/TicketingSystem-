import  { useState } from 'react';
import { FiPhone } from "react-icons/fi";
import { RiArrowGoBackFill } from "react-icons/ri";
import { IoReturnUpForward } from "react-icons/io5";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const commentsData = [
  {
    id: 1,
    title: 'Email Address Change',
    userImage: 'images/user2.jpg',
    userName: 'Emily Garcia',
    reportedTime: '9 days ago (Tue, 18 Jun 2024 at 9:27 PM)',
    message: `I need to update my email address. I want to know if I'll lose access to my account if I change it.
              I've added quite a few products to my cart and don't want to look for them again.

              It would be great to continue using this account with my new email address. Please let me know if that's possible.

              Regards,

              Emily Garcia`
  },
  // Add more comments here
];

const Comment = () => {
  const [showReplyEditor, setShowReplyEditor] = useState(false);
  const [replyContent, setReplyContent] = useState('');

  const handleReplyClick = () => {
    setShowReplyEditor(!showReplyEditor);
  };

  return (
    <div className='container'>
      {commentsData.map(comment => (
        <div key={comment.id} className='container'>
          <div className='flex mt-16 gap-6'>
            <div>
              <FiPhone className='text-xl mt-2' />
            </div>
            <div>
              <h1 className='font-bold text-xl'>{comment.title}</h1>
            </div>
          </div>
          <div className='flex my-8 gap-3'>
            <div>
              <img src={comment.userImage} className='rounded-xl' />
            </div>
            <div>
              <h1 className='text-[#042893] font-semibold text-lg'>{comment.userName} <span className='font-normal text-black'></span></h1>
              <p className='text-gray-700 italic'>
                {comment.reportedTime}
              </p>
            </div>
          </div>
          <div className='flex gap-4 py-4'>
            <div>
              <FiPhone className='text-base mt-2' />
            </div>
            <div className=''>
              <p>Hi ,</p>
              <p className='leading-10'>{comment.message}</p>
            </div>
          </div>
          <div className='flex bg-[#F5F7F9] w-full rounded-xl'>
            <div>
              <img src='images/P.png' className='w-6 py-1 my-2 mx-4' />
            </div>
            <div className='flex'>
              <button onClick={handleReplyClick} className='px-6 bg-white py-1 rounded-md my-2 border border-gray-300 mr-4 hover:bg-gray-50'>
                <div className='flex gap-1'><RiArrowGoBackFill className='mt-[0.35rem]' />
                  <span>Reply</span>  </div>  </button>
            </div>
            <div>
              <button className='px-6 bg-white py-1 rounded-md my-2 border border-gray-300 mr-4 hover:bg-gray-50'>
                <div className='flex gap-1'><IoReturnUpForward className='mt-[0.1rem] text-2xl' />
                  <span>Forward</span>  </div>  </button>  </div>
          </div>
          {showReplyEditor && (
            <div className='mt-4'>
              <ReactQuill value={replyContent} onChange={setReplyContent} />
              <button className='mt-2 px-4 py-2 bg-[#1E40AF] text-white rounded' onClick={() => console.log(replyContent)}>
                Submit Reply
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Comment;
