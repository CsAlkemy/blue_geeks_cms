import React from "react"
import Layout from "../components/Layout/layout";
import Seo from "../components/seo";
import UnderConstraction from "../components/Common/under-constraction";

const reviewPost = () => {
  return (
      <Layout>
          <Seo title="Review" />
          <div className="bg-white">
              <UnderConstraction />
          </div>
      </Layout>
  )
}

export default reviewPost
