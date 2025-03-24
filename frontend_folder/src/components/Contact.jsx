import React from 'react'

const Contact = () => {
  return (
	<div>
	   <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-12">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-center text-gray-700 mb-6">
          Contact Us
        </h2>

        <form className="mt-4">
          {/* Name Field */}
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your name"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm text-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm text-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          {/* Message Field */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm text-sm focus:ring-blue-500 focus:border-blue-500"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md
			 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Contact us
          </button>
        </form>
      </div>
    </div>
	</div>
  )
}

export default Contact
