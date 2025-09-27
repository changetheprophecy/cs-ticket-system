import React from 'react';
import { toast } from 'react-toastify';

const Card = ({ ticket, handleAddTask }) => {
    
  const handleClick = () => {
    toast("In Progress!");
    handleAddTask(ticket); // only adds to Task Status, not removed from tickets
  };

  return (
    <div onClick={handleClick} className='bg-white mx-4 md:mx-0 p-4 rounded-lg max-w-[460px] cursor-pointer hover:shadow-md'>
      <div className='flex justify-between'>
        <h1 className='text-lg md:text-xl font-semibold'>{ticket.title}</h1>
        <button className={`btn rounded-4xl border-none ${ticket.status === 'Open' ? 'bg-green-200' : 'bg-yellow-200'}`}>
          {ticket.status}
        </button>
      </div>
      <p className='text-sm md:text-lg text-gray-600'>{ticket.description}</p>
      <div className='flex justify-between text-sm mt-2'>
        <div className='flex gap-4'>
          <p className='font-semibold'>#{ticket.id}</p>
          <p className={`font-semibold ${
            ticket.priority === 'HIGH PRIORITY' ? 'text-red-500' :
            ticket.priority === 'MEDIUM PRIORITY' ? 'text-yellow-400' : 'text-green-500'
          }`}>{ticket.priority}</p>
        </div>
        <div className='flex gap-4'>
          <p>{ticket.customer}</p>
          <p><i className="fa-regular fa-calendar-days"></i> {ticket.createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
