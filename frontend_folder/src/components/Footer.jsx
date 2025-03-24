import React from 'react'

const Footer = () => {
  return (
	<footer className="bg-gray-900 text-white py-10 px-6">
	<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
	  <div>
		<h2 className="text-lg font-semibold mb-3">About RwandaHome.com</h2>
		<p className="text-gray-400">
		  RwandaHome.com is the first real estate classifieds website in Rwanda. 
		  Find the latest apartments, houses, lands, and other types of properties for sale 
		  and for rent in Kigali, Butare, Gitarama, and other cities and regions of Rwanda.
		</p>
	  </div>

	  <div>
		<h2 className="text-lg font-semibold mb-3">Contact Us</h2>
		<p className="text-gray-400">
		  We are operating in Rwanda with local agents and staff, and headquartered in Sydney, Australia.
		</p>
		<p className="text-gray-400 flex items-center mt-3">
		  📍 Sydney 2000, New South Wales, Australia
		</p>
		<p className="text-gray-400 flex items-center mt-2">
		  📧 hello@homerwanda.com
		</p>
	  </div>

	  <div>
		<h2 className="text-lg font-semibold mb-3">Newsletter Subscribe</h2>
		<div className="flex flex-col">
		  <input 
			type="email" 
			placeholder="Enter your email" 
			className="p-3 rounded-md text-black w-full bg-white"
		  />
		  <button className="bg-blue-500 hover:bg-blue-600 text-white mt-3 py-2 px-4 rounded-md">
			Submit
		  </button>
		</div>
		<p className="text-gray-400 text-sm mt-2">
		  Subscribe to our newsletter and get informed about the latest trends, news, and properties in Rwanda with HomeRwanda.com.
		</p>
	  </div>
	</div>
  </footer>
  )
}

export default Footer
