import React from "react"
import Layout from "../components/Layout/layout";
import Seo from "../components/seo";
import UnderConstraction from "../components/Common/under-constraction";

const sciencePost = () => {
  return (
      <Layout>
          <Seo title="Science" />
          <div className="bg-white">
              <UnderConstraction />
          </div>
      </Layout>
  )
}

export default sciencePost
