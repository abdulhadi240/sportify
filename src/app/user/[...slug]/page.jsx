'use client'
import React, { useState } from 'react';
import { FiEdit } from "react-icons/fi";
import Link from 'next/link';
import { MdKeyboardArrowDown } from "react-icons/md";

const tabs = [
    {
      id: 1,
      name: 'Bookings',
  
    },
    {
      id: 2,
      name: 'Invoices',
    },
    {
        id: 3,
        name: 'Matches',
    
      },
      {
        id: 4,
        name: 'Profile',
      },
  ];

const Bookings = () => {
  const [activeTab, setActiveTab] = useState('All'); // State to track active tab
  
  // Sample data for bookings
  const bookings = [
    {
      id: 1,
      bookingNo: 'B-37FBA5',
      ground: 'Padel Court',
      game: 'Padel Court 2',
      date: 'Nov 30, 2024',
      time: '02:00pm to 04:00pm',
      hours: 2,
      status: 'Pending',
      amount: 5000,
    },
    {
      id: 2,
      bookingNo: 'B-37FBA5',
      ground: 'Padel Court',
      game: 'Padel Court 2',
      date: 'Nov 30, 2024',
      time: '02:00pm to 04:00pm',
      hours: 2,
      status: 'Booked',
      amount: 5000,
    },
  ];

  


  // Filter bookings based on the active tab
  const filteredBookings =
    activeTab === 'All'
      ? bookings
      : bookings.filter((booking) => booking.status === activeTab);

  return (
    <div className="mx-16 flex flex-col gap-10">
        <div className='flex flex-wrap gap-4'>
            {tabs.map((tabs,index)=>{
                return(
                  <div key={index} className='mt-10'>
                    <Link href={`/${tabs.name}`} className="h-10 py-4 rounded-full  px-8  text-sm  bg-white text-black border-[1px] border-primary1 w-auto ">{tabs.name}</Link>
                    </div>
                )
            })}
        </div>
      {/* Heading */}
      <div className="text-start">
        <h1 className="text-4xl font-bold  mb-4">Bookings</h1>
        <div className='flex justify-between'>
        <div className="flex gap-4 justify-center mb-8">
          <button
            onClick={() => setActiveTab('All')}
            className={`px-6 py-2 rounded-full ${
              activeTab === 'All' ? 'bg-primary1 text-white' : 'bg-white text-black border-[1px] border-primary1'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('Pending')}
            className={`px-6 py-2 rounded-full ${
              activeTab === 'Pending' ? 'bg-primary1 text-white' : 'bg-white text-black border-[1px] border-primary1'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setActiveTab('Booked')}butto        className={`px-6 py-2 rounded-full ${
              activeTab === 'Booked' ? 'bg-primary1 text-white' : 'bg-white text-black border-[1px] border-primary1'
            }`}
          >
            Booked
          </button>
        </div>
        <div className='flex items-center h-10 px-2 border-lg border-[1px]'>
            <input type="text" name="" id="" className='focus:outline-none text-sm text-black placeholder:text-black/80  rounded-lg inset-0 active:border-0' placeholder='Select By Date' />
            <MdKeyboardArrowDown />
        </div>
        </div>
      </div>
      <div>
        <div className='flex gap-7 items-center -mt-10'>
            <input type="text" placeholder='Search by booking no ' className='bg-[#f9f9fb] h-10 py-2 border-[1px] rounded-sm border-[#ededee] pl-2 active:border-primary1 active:border-[1px] inset-0  text-black/70'/>
            <button className="h-10 py-2 rounded-lg px-6 text-sm text-white  w-auto bg-primary1">Search</button>

        </div>
      </div>

      {/* Table */}
      <div className="w-full max-w-6xl rounded-t-3xl overflow-x-auto">
        <table className="w-full text-left border-collapse  border border-gray-300">
          <thead className="bg-gray-100 ">
            <tr className=''>
              <th className="p-4 border-r-[0px] bg-[#f3e7fd] text-black font-bold text-sm border-b-gray-300">Booking No</th>
              <th className="p-4 border-r-[0px] bg-[#f3e7fd] text-black font-bold text-sm border-b-gray-300">Ground</th>
              <th className="p-4 border-r-[0px] bg-[#f3e7fd] text-black font-bold text-sm border-b-gray-300">Game</th>
              <th className="p-4 border-r-[0px] bg-[#f3e7fd] text-black font-bold text-sm border-b-gray-300">Date</th>
              <th className="p-4 border-r-[0px] bg-[#f3e7fd] text-black font-bold text-sm border-b-gray-300">Time</th>
              <th className="p-4 border-r-[0px] bg-[#f3e7fd] text-black font-bold text-sm border-b-gray-300">Hours</th>
              <th className="p-4 border-r-[0px] bg-[#f3e7fd] text-black font-bold text-sm border-b-gray-300">Status</th>
              <th className="p-4 border-r-[0px] bg-[#f3e7fd] text-black font-bold text-sm border-b-gray-300">Amount</th>
              <th className="p-4 border-r-[0px] bg-[#f3e7fd] text-black font-bold text-sm border-b-gray-300">Edit</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className={booking.id % 2 === 0 ? 'bg-[#fafafa]' : 'bg-white'}
                >
                  <td className="p-4 border-b-[1px] border-gray-300">{booking.bookingNo}</td>
                  <td className="p-4 border-b-[1px] border-gray-300">{booking.ground}</td>
                  <td className="p-4 border-b-[1px] border-gray-300">{booking.game}</td>
                  <td className="p-4 border-b-[1px] border-gray-300">{booking.date}</td>
                  <td className="p-4 border-b-[1px] border-gray-300">{booking.time}</td>
                  <td className="p-4 border-b-[1px] border-gray-300">{booking.hours}</td>
                  <td className="p-4 border-b-[1px] border-gray-300">
                    <span
                      className={`px-4 py-1  ${
                        booking.status === 'Pending'
                          ? 'text-[#ffa756] bg-[#fbe9d9] text-sm font-medium '
                          : 'bg-[#c8ece7] text-[#00b69b] text-sm font-medium'
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-4 border-b-[1px] border-gray-300">Rs {booking.amount}</td>
                  <td className="p-4 border-b-[1px] border-gray-300">
                    <button className="text-primary1 w-8 h-8 bg-[#f7edfa] flex justify-center items-center rounded-full underline"><FiEdit/></button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="9"
                  className="p-4 text-center text-gray-500 border border-gray-300"
                >
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default Bookings;
