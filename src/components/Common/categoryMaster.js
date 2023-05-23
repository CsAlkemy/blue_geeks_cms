import { graphql } from "gatsby"
import React from "react"
import Layout from "../Layout/layout"
import Seo from "../seo"
import PageBanner from "../Common/pageBannner"
import Blogs from "../Common/roundedCard"

const categoryMaster = ({ data }) => {
  const categoryData = data.allContentfulCategory.nodes[0]
  return (
    <Layout>
      <Seo title="Category name" />
        <PageBanner data={categoryData} />
        <Blogs data={categoryData.id} />
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
