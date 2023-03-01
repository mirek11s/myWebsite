import React from 'react'

const PathButtons = () => {
  return (
    <div className="h-96 flex max-sm:flex-col items-center justify-center">
      <button
        type="button"
        className="drop-shadow-xl text-white bg-gradient-to-br from-purple-800 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-xl rounded-lg px-14 py-6 text-center mx-5 mb-2"
      >
        CODE
      </button>
      <button
        type="button"
        className="drop-shadow-xl text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-xl rounded-lg px-14 py-6 text-center mx-5 mb-2 max-sm:mt-6"
      >
        CLAY
      </button>
    </div>
  )
}

export default PathButtons
