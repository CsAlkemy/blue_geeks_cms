import { graphql } from "gatsby"
import React, { Suspense } from "react"
import Seo from "../seo"
import Layout from "../Layout/layout"
import Loader from "../Common/loaderSpin"
const Title = React.lazy(() => import("./title"))
const BlogBody = React.lazy(() => import("./blogBody"))

const blogParent = ({ data }) => {
  //data manupulation
  const blogData = data.allContentfulBlog.edges[0].node
  const titleData = {
    title: blogData.title,
    author: blogData.author.name,
    publish: blogData.publishingDate,
    category: blogData.category[0].name,
  }

  return (
    <Layout>
      <Seo title={blogData.title} />
      <main>
        <section className="bg-cyan-300">
          <div className="w-full lg:w-8/12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="bg-black bg-opacity-25 p-5  h-full col-span-1 text-white md:col-span-4">
                {" "}
                <Suspense fallback={<Loader />}>
                  <Title data={titleData} />
                </Suspense>
              </div>
              <div className="bg-black bg-opacity-25 py-5 pr-5  col-span-1 hidden md:inline">
                <div className="bg-white h-full w-full">
                  <div className="p-2">sponsorship</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="my-5">
          <div className="w-full lg:w-8/12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-y-3 md:gap-x-2 bg-gray-100">
              <div className="col-span-3">
                <img
                  src={"https://" + blogData.coverImage.fixed.src}
                  alt={blogData.coverImage.title}
                  className="w-full pr-0 md:pr-3"
                />
                <div className="my-10 mr-5">
                  <Suspense fallback={<Loader />}>
                    <BlogBody data={blogData.blogBody} />
                  </Suspense>
                </div>
              </div>
              <div className="bg-white col-span-1">sponsorship</div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

//graphql queries
export const pageQuery = graphql`
  query($slug: String!) {
    allContentfulBlog(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          slug
          title
          publishingDate(formatString: "MMM DD, YY")
          coverImage {
            title
            fixed(quality: 10, width: 850) {
              src
            }
          }
          category {
            name
          }
          author {
            name
          }
          blogBody {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                __typename
                title
                fixed(width: 1600, height: 600, quality: 10) {
                  width
                  height
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`
export default blogParent
