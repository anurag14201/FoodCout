import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Meal from '../Meal/Meal';

const Food = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/" element={<Meal></Meal>}></Route>
            </Routes>
        </div>
    );
};

export default Food;