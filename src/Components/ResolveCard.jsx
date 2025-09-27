import React from 'react';

const ResolveCard = ({ ticket }) => {
  return (
    <div className=" bg-[#E0E7FF] rounded-lg my-4 text-gray-800 p-4 mx-4 md:mx-0">
      <h1 className="font-semibold text-sm md:text-lg">{ticket.title}</h1>
    </div>
  );
};

export default ResolveCard;
