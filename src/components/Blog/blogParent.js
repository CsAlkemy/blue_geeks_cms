import { graphql } from "gatsby"
import React, { Suspense } from "react"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
const Title = React.lazy(() => import("./title"))
const Layout = React.lazy(() => import("../Layout/layout"))
const Seo = React.lazy(() => import("../seo"))
const blogParent = ({ data }) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => (
        <div className="font-semibold  inline-block">{text}</div>
      ),
      [MARKS.ITALIC]: text => (
        <div className="font-semibold  italic inline-block">{text}</div>
      ),
      [MARKS.CODE]: text => (
        <>
          <pre
            as="div"
            className="overflow-auto rounded-md bg-gray-900 text-white p-5"
          >
            <code className="text-base font-light ">{text}</code>
          </pre>
        </>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => {
        return <div className="text-2xl font-semibold py-2">{children}</div>
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <div className="hover:underline hover:bg-blue-300 p-1 inline">
            <a
              href={node.data.uri}
              className="font-semibold text-blue-600"
              target="_blank"
              rel="noreferrer"
            >
              {children}
            </a>
          </div>
        )
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (
          <div className="text-base font-light text-justify py-5">
            {children}
          </div>
        )
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        console.log(node)
        return (
          <img
            className="py-5"
            src={node.data.target.fixed.src}
            alt={node.data.target.title}
          ></img>
        )
      },
    },
  }

  //data
  const blogData = data.allContentfulBlog.edges[0].node
  const titleData = {
    title: blogData.title,
    author: blogData.author.name,
    publish: blogData.publishingDate,
    category: blogData.category[0].name,
  }

  return (
    <Suspense fallback={<div>Featching Blog....</div>}>
      <Layout>
        <Seo title="Blog-Title" />
        <main>
          <section className="bg-cyan-300">
            <div className="w-full lg:w-8/12 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="bg-black bg-opacity-25 p-5  h-full col-span-1 text-white md:col-span-4">
                  {" "}
                  <Title data={titleData} />
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
                    src={blogData.coverImage.fixed.src}
                    alt={blogData.coverImage.title}
                    className="w-full pr-0 md:pr-3"
                  />
                  <div className="my-10 mr-5">
                    {renderRichText(blogData.blogBody, options)}
                  </div>
                </div>
                <div className="bg-white col-span-1">sponsorship</div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </Suspense>
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
            fixed(quality: 50, width: 850) {
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
