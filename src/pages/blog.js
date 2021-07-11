import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import Feature from "../components/Home/features"
import Recents from "../components/Home/recents"
import Newsletter from "../components/Home/emailList"

const BlogPage = () => (
  <Layout>
    <Seo title="Blog" />
    <Feature />
    <Recents />
    <Newsletter />
  </Layout>
)

export default BlogPage
