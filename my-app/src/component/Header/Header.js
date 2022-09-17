import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (

        <div>
            <nav className="font-bold bg-black p-8 text-orange-400 w-full">
                <Link to="/" className="p-6 hover:bg-red-700">Home</Link>
                <Link to="/" className="p-6 hover:bg-red-700">Meal</Link>
                <Link to="/" className="p-6 hover:bg-red-700">About</Link>
                <Link to="/" className="p-6 hover:bg-red-700">Order</Link>
                {/* <a href="/breakfast" className="p-6 hover:bg-red-700">Breakfast</a> */}

            </nav>
        </div >

    );
};

export default Header;