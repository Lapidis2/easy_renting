import React from 'react'
import SearchBar from './SearchBar'

export const  NavBar = () => {
	  return (
		<div className=' p-4 bg-green-500 '>
		<header>
			<h1 className='text-3xl'>GREAT CONNECTION BUSINESS GROUP</h1>
		</header>
	<nav className=' flex justify-around bg-green-500 text-white'>
		<div className='p-4 flex flex-col'>
			<span>Rental </span>
			<span>households </span>
		</div>
	  <ul className='flex justify-center space-x-4 p-4 sm:hiden hover:bg-green-400'>
		<li>Home</li>
		<li>About</li>
		<li>Contact</li>
	  </ul>
	</nav>
	<SearchBar />
		</div>
  )
}