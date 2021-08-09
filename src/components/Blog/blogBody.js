import React, { useContext } from "react"
import SlugContext from "./blogParent"

const blogBody = () => {
  const slug = useContext(SlugContext)
  return <div>hello</div>
}

export default blogBody
