import { BlogCardQuery } from "../../hooks/allContentfulQueryHooks"
import React from "react"

import Cards from "./cardVartical"
import Sponsor from "./sponsor"

const Recents = () => {
  const { nodes } = BlogCardQuery()
  const data = nodes
  return (
    <section className="py-10">
      <div className="w-11/12 lg:w-8/12 mx-auto pb-5">
        <div className="my-5">
          <h1 className="text-white text-2xl font-extrabold tracking-tight pb-10">
            Recents
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 grid-rows-1 gap-y-4 sm:gap-2">
          <div className="col-span-3 ">
            <Cards blogs={data} />
          </div>
          <div className="bg-white my-3">
            <Sponsor />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Recents
