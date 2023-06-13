// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import {AiFillYoutube} from "react-icons/ai"
import Loading from './Loader/Loading';

const Detail = () => {

  const {id} = useParams();
  const [meal,setMeal] = useState({});
  const [isLoading, setisLoading] = useState(true);

  const getSingleMeal = async() =>{
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    console.log(data.meals[0]);
    setMeal(data?.meals[0])
    setisLoading(false);
  }

  useEffect(() => {
    getSingleMeal()
  }, [])
  return (
    <>
      {isLoading?(
        <Loading/>
      ) : (
        <div>
          <img src={meal.strMealThumb} width={"300px"} className=' rounded-xl shadow-xl' alt="" />
          <div className=" text-white bg-pink-500 rounded-lg text-sm text-center w-20">{meal.strCategory}</div>
          <h1 className=' text-2xl'>{meal.strMeal}</h1>
          <div>
            <h2 className=' text-2xl mb-2'>Instruction</h2>
            <p className=" tracking-wider leading-4 text-gray-500">{meal.strInstructions}</p>
          </div>
          
          <div className=' flex gap-5 items-center'>
            <a href={meal.strYoutube} target='__blank'><AiFillYoutube className=' text-red-500 text-5xl cursor-pointer'/></a>
            <p className=' text-gray-500'>Watch on YouTube</p>
          </div>
          
        </div>
      )}
    </>
  )
}

export default Detail
