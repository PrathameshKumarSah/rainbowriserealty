import React from 'react'
import godrej from '../assets/godrej woods.jpg'
import villa from '../assets/villa1.png'
import riseresort from '../assets/rise-resort1.png'
import { Link } from 'react-router-dom'

const ReadyToMoveProjects = () => {
  return (
    <section className=" max-padd-container py-10 px-5 ">
    {/* Header Section */}
    <div className="text-center mb-8">
      <h2 className="text-6xl font-extrabold text-gray-900 overflow-y-hidden">
        Ready to move in projects
      </h2>
      <p className="text-gray-500 text-lg font-medium mt-2">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
    </div>

    {/* Filter Buttons */}
    <div className="flex justify-center space-x-4 mb-6">
      <button className="bg-secondary text-white px-6 py-4 rounded-md shadow-md">
        <Link to={'/project'} > All Projects </Link>
      </button>
    </div>

    {/* Projects Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-8xl mx-auto ">
      {/* Card 1 */}
      <div className="shadow-lg rounded-lg overflow-hidden">
        <img
          src={villa}
          alt="Rise Resort Villas"
          className="w-full h-80 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg">Rise Resort Villas</h3>
          <p className="text-gray-500 mt-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="shadow-lg rounded-lg overflow-hidden">
        <img
          src={godrej}
          alt="Godrej Woods"
          className="w-full h-80 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg">Godrej Woods</h3>
          <p className="text-gray-500 mt-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="shadow-lg rounded-lg overflow-hidden">
        <img
          src={riseresort}
          alt="Rise Resort Villas"
          className="w-full h-80 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg">Rise Resort Villas</h3>
          <p className="text-gray-500 mt-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ReadyToMoveProjects