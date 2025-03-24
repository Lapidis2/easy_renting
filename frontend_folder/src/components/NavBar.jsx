import React, { useState } from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
	<>
    <div className="w-full bg-green-500 fixed h-48 top-0 left-0 z-50">
      {/* Top Bar */}
      <div className="bg-green-600 text-white flex justify-end p-2 text-sm">
        <div className="space-x-4 hidden md:flex">
          <a href="#" className="hover:underline">Request property</a>
          <a href="#" className="hover:underline">Offer property</a>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-green-500 p-4 flex justify-end  relative">
        {/* Mobile Menu Icon */}
        <div 
          className="text-white cursor-pointer text-2xl" 
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          ☰
        </div>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute top-14 right-0 bg-green-600 text-white shadow-md rounded p-2 w-40">
            <a href="#" className="block px-4 py-2 hover:bg-green-800">Home</a>
            <a href="#" className="block px-4 py-2 hover:bg-green-800">About Us</a>
            <a href="#" className="block px-4 py-2 hover:bg-green-800">Services</a>
            <Link to="/contact" className="block px-4 py-2 hover:bg-green-800">Contact</Link>
          </div>
        )}

       
      </div>
	   <div className='flex  items-center gap-4'>
	   <div className="text-xl md:text-lg sm:text-sm font-bold text-white ml-4">
          GREAT CONNECTION BUSINESS GROUP
		  </div>

      {/* Search Bar */}
	  <div className="bg-green-600 text-white p-4 flex flex-wrap justify-center items-center gap-2 rounded-lg 
	  mx-2">
        <input
          type="text"
          placeholder="Enter neighborhood ..."
          className="p-2 border rounded w-52"
        />
        <select className="p-2 border bg-green-600 text-white rounded w-44
		 focus:bg-green-600 focus:text-white">
          <option>Rent</option>
          <option >Rental house</option>
          <option>Rent apartments</option>
          <option>Rent Hotel</option>
          <option>Rent Car</option>
          <option>Rent motor cycle</option>
          <option>Rent other vehicles</option>

        </select>
        <select className="p-2 border  bg-green-600 text-white rounded w-32">
          <option>Buy</option>
          <option>Buy house</option>
          <option>Buy apartments</option>
          <option>Buy Hotel</option>
          <option>Buy car</option>
          <option>Buy motor cycle</option>
          <option>Buy other vehicles</option>

        </select>
       
        <button className="bg-white text-black px-4 py-2 rounded flex items-center cursor-pointer
		hover:bg-gray-300">
           Search
        </button>
      </div>
	  </div>
	  </div>
	  <div className='pt-44'></div>
	  </>
  )
}
