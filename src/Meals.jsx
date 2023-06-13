// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from './Card'
import Loading from './Loader/Loading'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, SetisLoading] = useState(true)

    const getMeals = async () => {
        const {data}  = await axios.get(
            "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        setMeals(data.meals);
        SetisLoading(false);
    };

    useEffect(() => {
        getMeals();
    }, []);

  return (
    <>
    {isLoading ? (
        <Loading/>
    ) : (
        <div className='flex flex-wrap gap-5 py-10'>
        {meals?.map(meal => (
         <Card key={meal.idMeal} meal={meal}/>
        ))}
    </div>
    )}
    </>
  );
};

export default Meals
