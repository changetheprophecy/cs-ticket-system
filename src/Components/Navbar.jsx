import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar py-2 px-4 bg-white flex flex-col md:flex-row">
                <div className="flex-1">
                    <h1 className='text-2xl font-bold'>CS — Ticket System</h1>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                    <button className="btn btn-primary font-semibold text-lg">+ <span>New Ticket</span></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;