import React from 'react';

const Footer = () => {
    return (
        <div className=' bg-black text-white mt-16'>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-8 p-8 md:p-16'>
                <div className='col-span-2 max-w-[350px]'>
                    <h1 className='text-2xl font-bold mb-4'>CS — Ticket System</h1>
                    <p className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div>
                    <h2 className='text-xl font-semibold mb-4'>Company</h2>
                    <ul className='text-gray-400 space-y-2'>
                        <li>About Us</li>
                        <li>Our Mission</li>
                        <li>Contact Saled</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold mb-4'>Services</h2>
                    <ul className='text-gray-400 space-y-2'>
                        <li>Products & Services</li>
                        <li>Customer Stories</li>
                        <li>Download Apps</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold mb-4'>Information</h2>
                    <ul className='text-gray-400 space-y-2'>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Join Us</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold mb-4'>Social Links</h2>
                    <ul className='text-gray-400 space-y-2'>
                        <li><i class="fa-brands fa-square-x-twitter"></i> @CS — Ticket System</li>
                        <li><i class="fa-brands fa-linkedin"></i> @CS — Ticket System</li>
                        <li><i class="fa-brands fa-square-facebook"></i> @CS — Ticket System</li>
                        <li><i class="fa-solid fa-envelope"></i> support@cst.com</li>
                    </ul>
                </div>
            </div>
            <hr className='mx-16 text-gray-500'></hr>
            <p className='text-center text-sm p-4'>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>

    );
};

export default Footer;