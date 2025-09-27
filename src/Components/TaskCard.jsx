import React from 'react';
import { toast } from 'react-toastify';

const TaskCard = ({ ticket, handleRemoveTask }) => {

  const removeTask = () => {
    toast("Task Completed!");
    handleRemoveTask(ticket);
  };

  return (
    <div className='p-2 md:p-4 bg-white rounded-lg mx-4 md:mx-0 my-4'>
      <h1 className='font-semibold text-sm md:text-lg'>{ticket.title}</h1>
      <button 
        onClick={removeTask} className='btn text-white w-full rounded-lg bg-green-700 mt-2 text-sm md:text-lg'>Complete
      </button>
    </div>
  );
};

export default TaskCard;
