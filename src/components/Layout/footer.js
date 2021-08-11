import { MailIcon } from "@heroicons/react/outline"
import { Link } from "gatsby"
import * as React from "react"
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai"

const footer = ({ data }) => {
  return (
    <div className="bg-background text-white">
      <div className="w-full lg:w-8/12 mx-auto px-4 sm:px-6">
        <div className="text-3xl md:ml-0 ml-5 tracking-wider">
          {" "}
          <span className="font-extrabold">TECH</span>
          <span className="text-cyan-500 font-light">REV</span>
          <span className="my-5 text-7xl text-cyan-500 ">.</span>
        </div>
        <div className="flex flex-col md:flex-row my-5  text-white">
          <div className="mr-auto md:ml-0 ml-5">
            <h1 className="text-base font-medium md:mt-0 mt-3">SITEMAP.</h1>
            <ul className="font-light text-sm">
              <li>
                <Link to="/">BLOG</Link>
              </li>
              <li>
                <Link to="/">TECH</Link>
              </li>
              <li>
                <Link to="/">REVIEWS</Link>
              </li>
              <li>
                <Link to="/">SCIENCE</Link>
              </li>
              <li>
                <Link to="/">FEATURES</Link>
              </li>
            </ul>
          </div>
          <div className="mr-auto md:ml-0 ml-5">
            <h3 className="text-base font-medium md:mt-0 mt-3">ABOUT.</h3>
            <ul className="font-light text-sm">
              <li>
                <Link to="/">OUR STORY</Link>{" "}
              </li>
              <Link to="/">
                <li>TERMS OF USE</li>
              </Link>
              <Link to="/">
                <li>PRIVACY POLICY</li>
              </Link>
              <Link to="/">
                <li>MEMBERSHIPS</li>
              </Link>
              <Link to="/">
                <li>ADVERTISE</li>
              </Link>
            </ul>
          </div>
          <div className="mr-auto md:ml-0 ml-5">
            <h3 className="text-base font-medium md:mt-0 mt-3">CONTACT.</h3>
            <div className="flex flex-row">
              <MailIcon className="h-5" />
              <Link
                className="ml-3 mb-3 text-md "
                to="mailto:info@thetechrev.com"
              >
                INFO@THETECHREV.COM
              </Link>
            </div>
            <div className="flex gap-1">
              <Link to="#" target="_blank" rel="noreferrer">
                <AiFillFacebook className="h-7 w-7" name="facebook" />
              </Link>
              <Link to="#" target="_blank" rel="noreferrer">
                <AiFillLinkedin className="h-7 w-7" name="linkedin" />
              </Link>
              <Link to="#" target="_blank" rel="noreferrer">
                <AiFillTwitterSquare className="h-7 w-7 name='twiteer" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center font-normal text-xs pb-10">
          MADE WITH{" "}
          <span role="img" aria-label="lovemealkemy">
            ❤️
          </span>{" "}
          <span>
            <Link to="#"> BY &copy; TECHREV</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default footer
