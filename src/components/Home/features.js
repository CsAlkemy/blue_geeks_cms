import React from "react"

// Local imports
import Card from "./card"

const features = () => {
  return (
    <section className="py-10">
      <div className="w-11/12 lg:w-8/12 mx-auto pb-5">
        <div className="my-5">
          <h1 className="text-white text-2xl font-extrabold tracking-tight pb-10">
            Featured
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-black gap-4">
          <Card />
        </div>
      </div>
    </section>
  )
}

export default features
