import React from "react"

import Title from "../Blog/title"
const blogParent = data => {
  return (
    <main>
      {console.log({ data })}
      <section className="bg-cyan-300">
        <div className="w-full lg:w-8/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="bg-black bg-opacity-25 p-5  h-full col-span-1 text-white md:col-span-4">
              {" "}
              <Title />
            </div>
            <div className="bg-black bg-opacity-25 py-5 pr-5  col-span-1 hidden md:inline">
              <div className="bg-white h-full w-full">
                <div className="p-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="w-full lg:w-8/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-y-3 md:gap-x-2 bg-gray-100">
            <div className="col-span-3">h</div>
            <div className="bg-white col-span-1">Sponsoor</div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default blogParent
