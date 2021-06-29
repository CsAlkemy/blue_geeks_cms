import React from "react"
import { Link } from "gatsby"

// Static imports
import WordpressImage from "../../images/blog/Wordpress_unsplash.jpg"

const features = () => {
  return (
    <section className="py-10">
      <div className="w-11/12 lg:w-8/12 mx-auto pb-5">
        <div className="my-5">
          <h1 className="text-white text-2xl font-extrabold tracking-tight pb-10">
            Featured
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-black gap-4">
          <Link
            to="/"
            className="shadow-md mx-auto   transform hover:-translate-y-3 duration-300 hover:shadow-xl cursor-pointer"
          >
            <img
              className="max-h-48 w-full object-cover md:object-scale-down rounded-lg sm:rounded-none "
              src={WordpressImage}
              alt="wordpress"
            />
          </Link>
          <div className=" bg-white shadow-md mx-auto  transform hover:-translate-y-3 duration-300 hover:shadow-xl cursor-pointer">
            <Link to="/" className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </Link>
          </div>
          <div className="bg-white shadow-md mx-auto  transform hover:-translate-y-3 duration-300 hover:shadow-xl cursor-pointer">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </div>
          <div className=" bg-white shadow-md mx-auto transform hover:-translate-y-3 duration-300 hover:shadow-xl cursor-pointer">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </div>
        </div>
      </div>
    </section>
  )
}

export default features
