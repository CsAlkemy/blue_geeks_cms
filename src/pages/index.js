import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import Hero from "../components/Home/heroOne"
import HeroTwo from "../components/Home/heroTwo"
import Feature from "../components/Home/features"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <>
      <Hero />
      <HeroTwo />
      <Feature />
    </>
  </Layout>
)

export default IndexPage
