import React from 'react';
import './Meal.css'

const Meal = (props) => {
    const { strMeal, strMealThumb, strInstructions } = props.meal;
    return (
        <div>
            <div className="products">
                <img src={strMealThumb} alt=""></img>
                <h4>{strMeal}</h4>
                <p>{strInstructions.slice(0, 100)}</p>

            </div>
        </div>
    );
};

export default Meal;