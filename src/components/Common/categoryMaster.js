import { graphql } from "gatsby"
import React, { Suspense } from "react"
import Layout from "../Layout/layout"
import Seo from "../seo"
import Loader from "../Common/loaderSpin"

const PageBanner = React.lazy(() => import("../Common/pageBannner"))
const Blogs = React.lazy(() => import("../Common/roundedCard"))

const categoryMaster = ({ data }) => {
  const categoryData = data.allContentfulCategory.nodes[0]
  return (
    <Layout>
      <Seo title="Category name" />
      <Suspense fallback={<Loader />}>
        <PageBanner data={categoryData} />
        <Blogs data={categoryData.id} />
      </Suspense>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    allContentfulCategory(filter: { id: { eq: $id } }) {
      nodes {
        id
        name
        description
        coverImage {
          fixed(quality: 50) {
            src
            srcSet
          }
          title
        }
      }
    }
  }
`

export default categoryMaster
