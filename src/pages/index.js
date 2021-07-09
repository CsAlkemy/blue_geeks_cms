import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import Hero from "../components/Home/heroOne"
import HeroTwo from "../components/Home/heroTwo"
import Feature from "../components/Home/features"
import Recents from "../components/Home/recents"
import ViewedPost from "../components/Home/viewedPost"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <>
      <Hero />
      <HeroTwo />
      <Feature />
      <Recents />
      <ViewedPost />
      {/* TO DO
        **Newsletter
        Call to action ..follow design after some research.
       */}
    </>
  </Layout>
)

export default IndexPage
