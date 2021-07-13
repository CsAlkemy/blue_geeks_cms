import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import Feature from "../components/Home/features"
import Recents from "../components/Home/recents"
import Newsletter from "../components/Home/emailList"

const blogCategory = () => (
  <Layout>
    <Seo title="Blog" />
    <div className="bg-black">
      <Feature />
      <Recents />
      <Newsletter />
    </div>
  </Layout>
)

export default blogCategory
