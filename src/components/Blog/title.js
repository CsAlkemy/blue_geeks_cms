import { Link } from "gatsby"
import React from "react"

import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillCopy,
} from "react-icons/ai"

const title = props => {
  return (
    <>
      <div className="p-5 bg-black bg-opacity-50">
        <h1 className="text-3xl font-medium capitalize  py-7">{props.title}</h1>
      </div>
      <div className="flex flex-row gap-2 pl-5 py-2">
        <p className="font-semibold">
          <span className="font-thin">By </span>
          {props.author}
        </p>
        <p className="bg-black rounded-3xl px-2 text-sm my-auto">
          #{props.category}
        </p>
        <p className="font-medium">{props.publish}</p>
      </div>
      <div className="flex flex-row gap-2 pl-5">
        <h3>Share: </h3>
        <Link to="/">
          <AiFillFacebook className=" h-5 w-5" />
        </Link>
        <Link to="/">
          <AiFillTwitterSquare className=" h-5 w-5" />
        </Link>
        <Link to="/">
          <AiFillLinkedin className="h-5 w-5" />
        </Link>
        <Link to="/">
          <AiFillCopy className=" h-5 w-5" />
        </Link>
      </div>
    </>
  )
}

export default title
