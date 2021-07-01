import React from "react"
import { Link } from "gatsby"

import PresentationImage from "../../images/blog/PresentationTrends-Blog.jpg"
import WordpressImage from "../../images/blog/Wordpress_unsplash.jpg"
import VpnImage from "../../images/blog/vpn.jpg"
import ThemeImage from "../../images/blog/top10theme.jpg"

const blogList = [
  {
    id: 1,
    title: "BUILD YOUR WEBSITE USING WORDPRESS IN 10 MINUTES",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, necessitatibus.",
    image: PresentationImage,
    link: "/",
  },
  {
    id: 2,
    title: "Title 2",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, necessitatibus.",
    image: VpnImage,
    link: "/",
  },
  {
    id: 3,
    title: "Title 3",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, necessitatibus.",
    image: WordpressImage,
    link: "/",
  },
  {
    id: 4,
    title: "Title 4",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, necessitatibus.",
    image: ThemeImage,
    link: "/",
  },
]

const recents = () => {
  return (
    <>
      {blogList.map(item => (
        <Link to={item.link} key={item.id}>
          <div className="grid grid-cols-5 sm:grid-cols-4 py-3 transform hover:-translate-y-1 duration-75 hover:shadow-md">
            <div className="col-span-2 sm:col-span-1">
              <img
                className="h-40 max-h-40 w-full object-cover"
                src="https://images.unsplash.com/photo-1552548329-64471f10571f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80"
                alt="Blog poster"
              />
            </div>
            <div className="col-span-3 bg-white p-3 ">
              <h1 className="text-xl font-semibold hover:text-cyan-500 hover:underline mb-3">
                {item.title}
              </h1>
              <div className="flex gap-x-2">
                <p className="text-sm text-white font-base bg-black px-2 rounded-lg mb-1">
                  #Theme
                </p>
                <div className="flex text-gray-900 gap-x-1 text-sm font-extralight">
                  <p>Author</p>
                  <p>01 Jul 21</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm font-normal">
                {item.subtitle}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default recents
