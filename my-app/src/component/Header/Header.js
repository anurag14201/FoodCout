import React from 'react';
import './Header.css'

const Header = () => {
    return (

        <div>
            <nav className="font-bold bg-black p-8 text-orange-400 w-full">
                <a href="/home" className="p-6 hover:bg-red-700">Home</a>
                <a href="/food" className="p-6 hover:bg-red-700">Food</a>
                <a href="/about" className="p-6 hover:bg-red-700">About</a>
                <a href="/order" className="p-6 hover:bg-red-700">Order</a>
                {/* <a href="/breakfast" className="p-6 hover:bg-red-700">Breakfast</a> */}
            </nav>
        </div >

    );
};

export default Header;