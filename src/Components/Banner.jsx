import React from 'react';

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className='max-w-[1280px] md:mx-auto my-[60px] flex flex-col md:flex-row justify-between gap-4 md:gap-8 text-center text-white mx-4'>

  <div className="relative h-[250px] flex-1 py-8 md:p-20 rounded-xl bg-gradient-to-r from-[#5F33DB] to-[#9665EA]">
    <img src="/vector1.png" className="absolute left-0 top-0 h-full" />
    <img src="/image.png" className="absolute right-0 top-0 h-full" />
    <div className="relative z-10">
      <p className='text-xl'>In-Progress</p>
      <h1 className='text-5xl font-semibold'>{inProgressCount}</h1>
    </div>
  </div>

  <div className="relative h-[250px] flex-1 py-8 md:p-20 rounded-xl bg-gradient-to-r from-[#71C581] to-[#398181]">
    <img src="/vector1.png" className="absolute left-0 top-0 h-full" />
    <img src="/image.png" className="absolute right-0 top-0 h-full" />
    <div className="relative z-10">
      <p className='text-xl'>Resolved</p>
      <h1 className='text-5xl font-semibold'>{resolvedCount}</h1>
    </div>
  </div>

</div>

  );
};

export default Banner;
