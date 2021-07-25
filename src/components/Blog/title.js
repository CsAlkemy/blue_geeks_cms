import { Link } from "gatsby"
import React from "react"

import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillCopy,
} from "react-icons/ai"

const title = () => {
  return (
    <>
      <div className="p-5 bg-black bg-opacity-50">
        <h1 className="text-3xl font-medium capitalize  py-7">
          Setup your wordpress site in 10 min.
        </h1>
      </div>
      <div className="flex flex-row gap-2 pl-5 py-2">
        <p>
          <span className="font-semibold">By </span>Alkemy
        </p>
        <p>Wordpress</p>
        <p className="font-medium">July 23, 20</p>
      </div>
      <div className="flex flex-row gap-2 pl-5 inline-flex">
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
