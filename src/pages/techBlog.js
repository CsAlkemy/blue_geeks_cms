import React from "react"
import UnderConstraction from "../components/Common/under-constraction";
import Layout from "../components/Layout/layout";
import Seo from "../components/seo";

const techBlog = () => {
  return (
      <Layout>
          <Seo title="Tech" />
          <div className="bg-white">
              <UnderConstraction />
          </div>
      </Layout>
  )
}

export default techBlog
