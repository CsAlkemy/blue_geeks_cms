import React from "react"
import { Link } from "gatsby"

import PresentationImage from "../../images/blog/PresentationTrends-Blog.jpg"
import WordpressImage from "../../images/blog/Wordpress_unsplash.jpg"
import VpnImage from "../../images/blog/vpn.jpg"
import ThemeImage from "../../images/blog/top10theme.jpg"

const blogList = [
  {
    id: 1,
    title: "Build your website in 10 minutes",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    tag: "website",
    author: "Sarwar",
    to: "/test",
    Image: PresentationImage,
  },
  {
    id: 2,
    title: "Build your website in 7 minutes",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    tag: "website",
    author: "miad",
    to: "/",
    Image: ThemeImage,
  },
  {
    id: 3,
    title: "Build your website in 10 minutes",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    tag: "website",
    author: "rumman",
    to: "/",
    Image: VpnImage,
  },
  {
    id: 4,
    title: "Build your website in 10 minutes",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    tag: "website",
    author: "alkemy",
    to: "/",
    Image: WordpressImage,
  },
]

const card = () => {
  return (
    <>
      {blogList.map(item => (
        <Link
          key={item.id}
          to={item.to}
          className="bg-white shadow-md mx-auto transform hover:-translate-y-3 duration-300 hover:shadow-xl w-11/12 xl:w-10/12"
        >
          <img
            src={item.Image}
            className="max-h-36 h-36 w-full object-cover"
            alt="card poster"
          />
          <div className="p-3">
            <h1 className="text-lg font-bold hover:text-cyan-500">
              {item.title}
            </h1>
            <p className="text-sm text-justify text-gray-600">
              {item.subtitle}
            </p>
            <div className="flex mx-auto gap-x-3 justify-between pt-4">
              <p className="text-sm bg-black hover:bg-cyan-500 rounded-lg px-2 text-white">
                # {item.tag}
              </p>
              <p className="text-sm text-right">{item.author}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default card
