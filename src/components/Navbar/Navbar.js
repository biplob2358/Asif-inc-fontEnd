import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-blue-500 text-white">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl">Asif inc</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>

                        <li><a>Item 3</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;