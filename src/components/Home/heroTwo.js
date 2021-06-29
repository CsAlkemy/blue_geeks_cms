import React from "react"
// import { Link } from "gatsby"

// //all local file import
// import WordpressImage from "../../images/blog/Wordpress_unsplash.jpg"
// import VpnImage from "../../images/blog/vpn.jpg"

const hero = () => {
  return (
    <div className="pb-10">
      <section className="w-11/12 lg:w-8/12 mx-auto pb-5">
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 border-0 border-cyan-500 md:border-2 border-t-0 md:border-t-0">
          <div className="bg-green-500 order-first md:order-none col-span-1">
            image
          </div>
          <div className="bg-cyan-500  order-last md:order-none row-span-2 ">
            Image
          </div>
          <div className="bg-indigo-500  order-last md:order-none row-span-2">
            Text
          </div>
          <div className="bg-red-500  row-span-1">text</div>
        </div>
      </section>
    </div>
  )
}
export default hero
