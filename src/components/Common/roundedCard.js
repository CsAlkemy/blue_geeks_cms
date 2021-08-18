import React from "react"
import { Link } from "gatsby"
//TODO
//in component graphql query to fetch data based onn specific id

const roundedCard = props => {
  console.log(props.data)
  return (
    <div className="max-h-full pb-20 md:max-w-4/5 mx-5 md:mx-auto text-black">
      <div className="container mx-auto mt-5 p-2 md:p-20 grid md:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-10 transform duration-500">
        <Link
          to="/"
          className="mx-auto pb-3 shadow-md transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none rounded-lg text-gray-800 w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            className="w-full max-h-52 object-cover mb-5 rounded-t-lg"
            alt="Project One Static"
          />
          <div className="p-3 lg:p-6">
            <h3 className="text-2xl  font-normal py-1">7House Website </h3>
            <p className="text-sm font-light  text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              cum?
            </p>
          </div>
        </Link>
        <Link
          to="/"
          className="mx-auto pb-3 shadow-md transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none rounded-lg text-gray-800 w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            className="w-full max-h-52 object-cover mb-5 rounded-t-lg"
            alt="Project One Static"
          />
          <div className="p-3 lg:p-6">
            <h3 className="text-2xl  font-normal py-1">7House Website </h3>
            <p className="text-sm font-light  text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              cum?
            </p>
          </div>
        </Link>
        <Link
          to="/"
          className="mx-auto pb-3 shadow-md transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none rounded-lg text-gray-800 w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            className="w-full max-h-52 object-cover mb-5 rounded-t-lg"
            alt="Project One Static"
          />
          <div className="p-3 lg:p-6">
            <h3 className="text-2xl  font-normal py-1">7House Website </h3>
            <p className="text-sm font-light  text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              cum?
            </p>
          </div>
        </Link>
        <Link
          to="/"
          className="mx-auto pb-3 shadow-md transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none rounded-lg text-gray-800 w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            className="w-full max-h-52 object-cover mb-5 rounded-t-lg"
            alt="Project One Static"
          />
          <div className="p-3 lg:p-6">
            <h3 className="text-2xl  font-normal py-1">7House Website </h3>
            <p className="text-sm font-light  text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              cum?
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default roundedCard
