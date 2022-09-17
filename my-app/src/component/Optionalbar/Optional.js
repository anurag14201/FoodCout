import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Food from '../MealDetils/Food';

import './option.css'

const Optional = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [searchText])

    const SearchFood = e => {
        setSearchText(e.target.value);
    }

    return (
        <div className="nothing">
            <h1 className='text-xl font-bold text-white'>
                Hey!! Search Your Meal And feel with us
            </h1>

            <input onChange={SearchFood} type="search" className="p-2.5 w-2/4 text-center align-middle border-2 border-solid" placeholder="Search Your Food.." required></input>
            <br></br>
            <button className="m-4 p-3 border-black border-0 text-white rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500">Search</button>
            <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-1">
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>

            <Food></Food>
        </div>
    );
};

export default Optional;