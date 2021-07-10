import React from "react"
import EmailIcon from "../../images/email.png"

const emailList = () => {
  return (
    <section className="py-10 pb-20 mx-2 lg:mx-10">
      <div className="w-11/12 lg:w-8/12 mx-auto  rounded-sm bg-white pb-5">
        <div className="p-3 text-center">
          <img
            src={EmailIcon}
            className="h-32 w-32 object-center md:object-top mx-auto mt-5"
            alt="email art"
          />
          <h1 className="text-3xl font-semibold my-3 uppercase">Newsletter</h1>
          <p className="">Get notified when we publish something new!</p>
          <div className="flex flex-row mx-auto justify-items-center my-10 ">
            <input type="text" className="p-3 bg-indigo-200 shadow-md" />
            <button className="px-5 text-white font-bold bg-cyan-500 hover:bg-cyan-700 shadow-md ">
              Join
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default emailList
