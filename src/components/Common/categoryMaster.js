import { graphql } from "gatsby"
import React from "react"
import Layout from "../Layout/layout"
import Seo from "../seo"

const categoryMaster = ({ data }) => {
  const categoryData = data.allContentfulCategory.nodes[0]
  return (
    <Layout>
      <Seo title="Category name" />
      <div className=" h-96 overflow-hidden relative">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={categoryData.coverImage.fixed.src}
          alt={categoryData.coverImage.title}
          srcSet={categoryData.coverImage.fixed.srcSet}
        />
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <div className="flex flex-col text-white h-full items-center justify-center relative">
          <h1 className="text-7xl font-bold my-5 text-teal-100 tracking-wider">
            {categoryData.name}
          </h1>
          <p className="text-lg tracking-normal md:tracking-wider mx-5 md:mx-0 text-center md:text-left">
            {categoryData.description}
          </p>
        </div>
      </div>
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
