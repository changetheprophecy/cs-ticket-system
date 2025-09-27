import React from 'react';
import Card from './Card';

const Main = ({ tickets, handleAddTask }) => {
  return (
    <div className='p-2'>
      <h1 className='text-2xl font-semibold mx-4 md:mx-0 my-4'>Customer Tickets</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
        {tickets.length === 0 ? (<p className='text-gray-600'>No tickets left.</p>) 
            : (tickets.map(ticket => (<Card key={ticket.id} ticket={ticket} handleAddTask={handleAddTask} />)))}
      </div>
    </div>
  );
};

export default Main;
