import React from 'react';
import './option.css'

const Optional = () => {
    return (
        <div className="nothing">
            <h1 className='text-xl font-bold text-white'>
                Hey!! Search Your Meal And feel with us
            </h1>

            <input type="search" className="p-2.5 w-2/4 text-center align-middle border-2 border-solid" placeholder="Search Your Food.." required></input>
            <br></br>
            <button className="m-4 p-3 border-black border-0 text-white rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500">Search</button>

        </div>
    );
};

export default Optional;