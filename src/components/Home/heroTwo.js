import React from "react"
import { Link } from "gatsby"

// //all local file import
import ThemeImage from "../../images/blog/top10theme.jpg"
import PresentationImage from "../../images/blog/PresentationTrends-Blog.jpg"

const hero = () => {
  return (
    <div className="pb-10 pt-10 md:pt-0">
      <section className="w-11/12 lg:w-8/12 mx-auto pb-5">
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 border-0 border-cyan-500 md:border-2 border-t-0 md:border-t-0 gap-y-4 md:gap-y-0">
          <Link
            to="/"
            className="order-first md:order-none col-span-1 transform hover:scale-105 duration-150"
          >
            <img
              src={ThemeImage}
              className="max-h-36 h-36 object-cover w-full rounded-lg md:rounded-none "
              alt="top 10 landing page theme."
            />
          </Link>
          <Link
            to="/"
            className=" order-last md:order-none row-span-2 border-0 md:border-l-2 border-cyan-500"
          >
            <h1 className="uppercase text-2xl lg:text-3xl xl:text-4xl font-medium tracking-tight text-left  md:text-right p-3 rounded-lg md:rounded-none  hover:text-cyan-500 text-white">
              Top 10 landing Page Theme in 2021
            </h1>
          </Link>
          <Link
            to="/"
            className=" text-white row-span-2 transform hover:scale-105 duration-150"
          >
            <img
              className="max-h-64 h-60 w-full object-cover rounded-lg md:rounded-none"
              src={PresentationImage}
              alt="presentation poster"
            />
          </Link>
          <Link
            to="/"
            className=" text-white order-first md:order-none  row-span-1 uppercase p-2"
          >
            <h1 className=" text-2xl uppercase font-medium tracking-tight hover:text-cyan-500">
              Top React Js websites template of 2021.
            </h1>
          </Link>
        </div>
      </section>
    </div>
  )
}
export default hero
