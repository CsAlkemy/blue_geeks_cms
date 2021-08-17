import React from "react"
import { Link } from "gatsby"

const verticalCard = props => {
  return (
    <>
      {props.data.map(blog => (
        <Link
          key={blog.slug}
          to={`/blog/${blog.slug}`}
          className="bg-white shadow-md mx-auto transform hover:-translate-y-3 duration-300 hover:shadow-xl w-11/12 xl:w-10/12"
        >
          <img
            src={"https:" + blog.coverImage.fixed.src}
            className="max-h-36 h-36 w-full object-cover"
            alt="card poster"
          />
          <div className="p-3">
            <h1 className="text-lg font-bold hover:text-cyan-500">
              {blog.title}
            </h1>
            <p className="text-sm text-justify text-gray-600">
              {blog.blogSummary}
            </p>
            <div className="flex mx-auto gap-x-3 justify-between pt-4">
              <p className="text-sm bg-black hover:bg-cyan-500 rounded-lg px-2 text-white">
                {"#" + blog.category[0].name}
              </p>
              <p className="text-sm text-right">{blog.author.name}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}
export default verticalCard
