import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import "../styles/loader.css"

const Hero = React.lazy(() => import("../components/Home/heroOne"))
const Feature = React.lazy(() => import("../components/Home/features"))
const Recents = React.lazy(() => import("../components/Home/recents"))
const ViewedPost = React.lazy(() => import("../components/Home/viewedPost"))
const Newsletter = React.lazy(() => import("../components/Home/emailList"))

const renderLoader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-900 h-14 w-14 my-24"></div>
    </div>
  )
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <React.Suspense fallback={renderLoader()}>
      <div className="bg-black">
        <Hero />
        <Feature />
        <Recents />
        <ViewedPost />
        <Newsletter />
      </div>
    </React.Suspense>
  </Layout>
)

export default IndexPage
