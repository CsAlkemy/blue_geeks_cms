import React from "react"
import { Link } from "gatsby"

const recents = props => {
  return (
    <>
      {props.blogs.map(blog => (
        <Link to={`/blog/${blog.slug}`} key={blog.slug}>
          <div className="grid grid-cols-5 sm:grid-cols-4 py-3 transform hover:-translate-y-1 duration-75 hover:shadow-md">
            <div className="col-span-2 sm:col-span-1">
              <img
                className="h-40 max-h-40 w-full object-cover"
                src={"https:" + blog.coverImage.fixed.src}
                alt="Blog poster"
              />
            </div>
            <div className="col-span-3 bg-white p-3 ">
              <h1 className="text-xl font-semibold hover:text-cyan-500 hover:underline mb-3">
                {blog.title}
              </h1>
              <div className="flex gap-x-2">
                <p className="text-sm text-white font-base bg-black px-2 rounded-lg mb-1">
                  #{blog.category[0].name}
                </p>
                <div className="flex text-gray-900 gap-x-1 text-sm font-extralight">
                  <p>{blog.author.name}</p>
                  <p>{blog.publishingDate}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm font-normal mt-3">
                {blog.blogSummary}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default recents
