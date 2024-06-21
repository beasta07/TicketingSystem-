import React from 'react';
// import { IoMdSearch } from 'react-icons/io';
// import { CiChat1 } from "react-icons/ci";
// import { IoIosNotificationsOutline } from "react-icons/io";
// import { CiUser } from "react-icons/ci";
import Sidebar from '../components/Sidebar';
// import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlinePaperClip } from "react-icons/ai";
import { GoDownload } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import TodoList from '../components/TodoList';
import Navbar from '../components/Navbar'
const AdminDashboard = () => {
  return (
    <div>
      <div className='flex'>
        <Sidebar />
        <div className='flex flex-col w-full'>
          <Navbar/>
          <div className='flex px-2 py-4 mt-[7rem]'>
            {[
              { title: "Unresolved", count: 3 },
              { title: "Overdue", count: 1 },
              { title: "Due Today", count: 0 },
              { title: "Open", count: 3 },
              { title: "On Hold", count: 2 },
              { title: "Unassigned", count: 4 },
            ].map((item, index) => (
              <div key={index} className='bg-white border border-gray-200 shadow-sm w-full p-4 text-center m-2'>
                <p>{item.title}</p>
                <p className='font-bold text-[1.5rem]'>{item.count}</p>
              </div>
            ))}
          </div>
          <div className='flex px-4 justify-center gap-6'>
            <div className='border border-gray-200 py-6 p-3 px-8'>
              <div className='flex justify-between'>
                <h1 className='font-semibold text-black'>Recent Activities</h1>
                <p className='text-sm text-gray-400 mt-1'>Last Activity: 2 hours ago</p>
              </div>
              {[
                { icon: IoIosAddCircleOutline, color: 'blue', user: 'Louise', action: 'added a time entry to the ticket', ticket: 'Sales Revenue', time: '2 hours ago' },
                { icon: AiOutlinePaperClip, color: 'green', user: 'Kevin', action: 'added new attachment to the ticket', ticket: 'Software Bug Reporting', time: '5 hours ago' },
                { icon: GoDownload, color: 'orange', user: 'Natalie', action: 'reassigned ticket', ticket: 'Problem installing software', to: 'Katherine', time: '8 hours ago' },
                { icon: IoSettingsOutline, color: 'purple-600', user: 'Katherine', action: 'changed settings to ticket category', ticket: 'Payment & Invoice', time: '2 days ago' },
              ].map((activity, index) => (
                <div key={index} className='flex gap-4 py-4'>
                  <activity.icon className={`text-[1.5rem] text-${activity.color}`} />
                  <div className='text-gray-500'>
                    <p className='text-sm'><span className='font-semibold text-black'>{activity.user} </span>{activity.action} <span className='font-semibold text-black'>{activity.ticket}</span> {activity.to && `to ${activity.to}`}</p>
                    <p className='text-xs py-1'>{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className='border border-gray-200 p-3 py-6 px-8 w-96'>
              <div className='flex justify-between pb-4'>
                <div>
                  <h1 className='font-semibold'>Unresolved Tickets</h1>
                  <p className='text-xs py-1'>Across helpdesk</p>
                </div>
                <p className='text-sm text-blue-500 mt-1'>View Details</p>
              </div>
              {[
                { group: 'Escalations', count: 2 },
                { group: 'Customer Support', count: 2 },
              ].map((ticket, index) => (
                <div key={index}>
                  <div className='flex justify-between'>
                    <p className='text-gray-500'>{ticket.group}</p>
                    <p className='text-gray-500'>{ticket.count}</p>
                  </div>
                  <hr className='border-t border-gray-300 mx-auto my-4 opacity-50' />
                </div>
              ))}
            </div>
            <div>
              <TodoList className='py-60 h-[60rem]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
