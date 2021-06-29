import React from "react"
import { Link } from "gatsby"

//all local file import
import WordpressImage from "../../images/blog/Wordpress_unsplash.jpg"
import VpnImage from "../../images/blog/vpn.jpg"

const hero = () => {
  return (
    <div className="pt-10">
      <section className="w-11/12 lg:w-8/12 mx-auto pt-5">
        <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-0 border-b-0 sm:border-2 border-cyan-500">
          <div className="row-span-3 ">
            <img
              src={WordpressImage}
              alt="wordpress on laptop"
              className=" object-contain md:object-scale-down h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="row-span-3 border-r-0 sm:border-r-2 border-cyan-500">
            <div className="px-3 pt-2 text-white">
              <Link to="/">
                <h1 className="uppercase text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium tracking-tight   hover:text-cyan-500">
                  {" "}
                  Build Your website using Wordpress in 10 minutes.
                </h1>
              </Link>
              <p className="text-sm text-gray-400 uppercase ">
                By <span className="text-white">Alkemy</span>
              </p>
            </div>
          </div>
          <div className="col-span-1 mt-10 sm:mt-0">
            <img
              src={VpnImage}
              className="max-h-28 h-full w-full object-cover rounded-lg md:rounded-none"
              alt="best vpn poster"
            />
          </div>
          <div className="col-span-1 ">
            <div className="p-3">
              <Link
                to="/"
                className="text-white text-2xl uppercase font-medium tracking-tight hover:text-cyan-500"
              >
                The top 10 vpn of 2021 | Limited Deal: $1.59/m‎.
              </Link>
              <p className="text-gray-400 text- uppercase">
                By <span className="text-white">Tahrim</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default hero
