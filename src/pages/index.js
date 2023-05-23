import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import "../styles/loader.css"

import Hero from "../components/Home/heroOne"
import Feature from "../components/Home/features"
import Recents from "../components/Home/recents"
import ViewedPost from "../components/Home/viewedPost"
import Newsletter from "../components/Home/emailList"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div className="bg-black">
        <Hero />
        <Feature />
        <Recents />
        <ViewedPost />
        <Newsletter />
      </div>
    </Layout>
  )
}

export default IndexPage
