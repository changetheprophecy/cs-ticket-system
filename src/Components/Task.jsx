import React from 'react';
import TaskCard from './TaskCard';
import ResolveCard from './ResolveCard';

const Task = ({ selectTicket, handleRemoveTask, resolveTask }) => {
  return (
    <div>
      <h1 className='text-xl md:text-2xl font-semibold mx-4 md:mx-0 my-4'>Task Status</h1>
      {
        selectTicket.length > 0 ? (selectTicket.map(ticket => (<TaskCard key={ticket.id} ticket={ticket} handleRemoveTask={handleRemoveTask} />))) 
            : (<p className='text-gray-600 mx-4 md:mx-0'>Select a ticket to add to Task Status</p>)
      }

      <h1 className="text-xl md:text-2xl font-semibold mx-4 md:mx-0 my-4">Resolved Task</h1>
      {
        resolveTask.length === 0 ? (<p className="text-gray-600 mx-4 md:mx-0">No resolved tasks yet.</p>)
             : (resolveTask.map(ticket => <ResolveCard key={ticket.id} ticket={ticket} />))
    }
    </div>
  );
};

export default Task;
