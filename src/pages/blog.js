import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import Blog from "../components/Blog/blogParent"

const blog = () => (
  <Layout>
    <Seo title="Blog-Title" />
    <Blog />
  </Layout>
)
export default blog
