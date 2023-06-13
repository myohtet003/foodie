// eslint-disable-next-line no-unused-vars
import React from 'react'
import {AiFillEye} from "react-icons/ai"
import { Link } from 'react-router-dom'

const Card = (meal) => {
  return (
    <div className=" w-60 border-2 justify-center items-center flex-col p-5 rounded-xl gap-5 relative h-80 shadow-lg
    hover:scale-105 transition duration-200 hover:shadow-xl">
      <img src={meal.meal.strMealThumb} className=' rounded-xl w-35' alt=''/>
      <h3>{meal.meal.strMeal}</h3>
        <button className=" text-white bg-blue-500 px-8 py-2 absolute left-auto right-auto ml-12 bottom-3 rounded-xl">
          <Link to={`/detail/${meal.meal.idMeal}`}>
              <AiFillEye className='text-2xl'/>
          </Link>
        </button>
    </div>
  )
}

export default Card

