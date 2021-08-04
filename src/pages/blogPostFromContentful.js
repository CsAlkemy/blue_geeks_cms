import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"

export const query = graphql`
  {
    blogs: allContentfulBlog {
      nodes {
        id
        title
        slug
        publishingDate
        author {
          name
        }
        category {
          name
        }
      }
    }
  }
`
const blogPostFromContentful = ({ data }) => (
  <Layout>
    <Seo title="Test" />
    <div className="w-2/3  mx-auto bg-green-100 rounded-md">
      {data.blogs.nodes.map(blog => (
        <div key={blog.id}>
          <h2>
            <Link to={blog.slug}>{blog.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  </Layout>
)

export default blogPostFromContentful
