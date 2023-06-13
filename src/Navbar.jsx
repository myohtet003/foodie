// eslint-disable-next-line no-unused-vars
import React from 'react'
import {RiRestaurant2Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    
    <Link to='/'>
      <div className=' flex items-center gap-2 mt-6'>
        <RiRestaurant2Fill className=' text-pink-500 text-3xl '/>
        <p className=' text-xl font-semibold text-pink-500'>Foodie</p>
      </div>
    </Link>
    
  )
}

export default Navbar
