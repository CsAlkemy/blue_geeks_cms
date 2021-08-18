import React from "react"
import { Link } from "gatsby"

const pageBannner = props => {
  return (
    <div className=" h-96 overflow-hidden relative">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={props.data.coverImage.fixed.src}
        alt={props.data.coverImage.title}
        srcSet={props.data.coverImage.fixed.srcSet}
      />
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      <div className="flex flex-col text-white h-full items-center justify-center relative">
        <h1 className="text-7xl font-bold my-5 text-center text-teal-100 tracking-wider">
          {props.data.name}
        </h1>
        <p className="text-xl text-gray-50 mt-5 tracking-normal mx-5 md:mx-0 text-center md:text-left">
          {props.data.description}
        </p>
        <div className="mt-5 sm:mt-8 flex justify-center ">
          <div className="rounded-md shadow">
            <Link
              to="/"
              className="rounded-full w-full flex items-center justify-center px-8 py-3  text-base font-medium text-gray-800 bg-white hover:bg-blue-600 hover:text-white md:py-3 md:text-lg md:px-10"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default pageBannner
