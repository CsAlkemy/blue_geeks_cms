import React from "react"
import { Link } from "gatsby"
import { TopPinBlogQuery } from "../../hooks/topPinPost"

const hero = () => {
  const { nodes } = TopPinBlogQuery()
  return (
    <div className="pt-10">
      <section className="w-11/12 lg:w-8/12 mx-auto pt-5">
        <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-0 border-b-0 md:border-2 border-cyan-500 gap-y-4 md:gap-y-0">
          <Link to={`/blog/${nodes[2].slug}`} className="row-span-3 ">
            <img
              src={"https:" + nodes[2].coverImage.fixed.src}
              alt={nodes[0].coverImage.title}
              className="max-h-64 h-full w-full rounded-lg md:rounded-none"
            />
          </Link>
          <div className="row-span-3 border-r-0 md:border-r-2 border-cyan-500">
            <div className="px-3 pt-2 text-white">
              <Link to={`/blog/${nodes[2].slug}`}>
                <h1 className="uppercase text-2xl lg:text-2xl xl:text-4xl font-medium tracking-tight  hover:text-cyan-500">
                  {" "}
                  {nodes[2].title}
                </h1>
              </Link>
              <p className="text-sm text-gray-400 uppercase ">
                By <span className="text-white">{nodes[2].author.name}</span>
              </p>
            </div>
          </div>
          <Link
            to={`/blog/${nodes[3].slug}`}
            className="col-span-1 mt-10 sm:mt-0"
          >
            <img
              src={"https:" + nodes[3].coverImage.fixed.src}
              className="max-h-36 h-36 sm:max-h-28 md:h-28 w-full object-cover rounded-lg md:rounded-none"
              alt={nodes[3].coverImage.title}
            />
          </Link>
          <div className="col-span-1 ">
            <div className="p-3">
              <Link
                to={`/blog/${nodes[3].slug}`}
                className="text-white text-2xl uppercase font-medium tracking-tight hover:text-cyan-500"
              >
                {nodes[3].title}
              </Link>
              <p className="text-gray-400 uppercase">
                By <span className="text-white">{nodes[3].author.name}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="pb-10 pt-10 md:pt-0">
        <section className="w-11/12 lg:w-8/12 mx-auto pb-5">
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 border-0 border-cyan-500 md:border-2 border-t-0 md:border-t-0 gap-y-4 md:gap-y-0">
            <Link
              to={`/blog/${nodes[0].slug}`}
              className="order-first md:order-none col-span-1"
            >
              <img
                src={"https:" + nodes[0].coverImage.fixed.src}
                className="max-h-36 h-36 object-cover w-full rounded-lg md:rounded-none "
                alt={nodes[0].coverImage.title}
              />
            </Link>
            <Link
              to={`/blog/${nodes[1].slug}`}
              className=" order-last md:order-none row-span-2 border-0 md:border-l-2 border-cyan-500"
            >
              <h1 className="uppercase text-2xl lg:text-3xl xl:text-4xl font-medium tracking-tight text-left  md:text-right p-3 rounded-lg md:rounded-none  hover:text-cyan-500 text-white">
                {nodes[1].title}
              </h1>
            </Link>
            <Link
              to={`/blog/${nodes[1].slug}`}
              className=" text-white row-span-2"
            >
              <img
                className="max-h-64 h-60 w-full object-cover rounded-lg md:rounded-none"
                src={"https:" + nodes[1].coverImage.fixed.src}
                alt={nodes[1].coverImage.title}
              />
            </Link>
            <Link
              to={`/blog/${nodes[0].slug}`}
              className=" text-white order-first md:order-none  row-span-1 uppercase p-2"
            >
              <h1 className=" text-2xl uppercase font-medium tracking-tight hover:text-cyan-500">
                {nodes[0].title}
              </h1>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
export default hero
