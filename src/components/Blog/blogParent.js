import { graphql, Link } from "gatsby"
import React from "react"
import Title from "../Blog/title"
import Layout from "../Layout/layout"
import Seo from "../seo"
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const blogParent = ({ data }) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <h1 className="font-bold text-lg">{text}</h1>,
      [MARKS.CODE]: text => (
        <h1 className="font-light text-blue-500 text-sm">{text}</h1>
      ),
      [INLINES.HYPERLINK]: text => (
        <a target="_blank" className="font-light text-green-500 text-base">
          {text}
        </a>
      ),
    },
    //https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer              helppppppppppp
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="text-xs font-semibold">{children}</p>
      ),

      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          <>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
          </>
        )
      },
    },
  }
  const blogData = data.contentfulBlog

  return (
    <Layout>
      <Seo title="Blog-Title" />
      {console.log(blogData)}
      <main>
        <section className="bg-cyan-300">
          <div className="w-full lg:w-8/12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="bg-black bg-opacity-25 p-5  h-full col-span-1 text-white md:col-span-4">
                {" "}
                <Title
                  title={blogData.title}
                  author={blogData.author.name}
                  publish={blogData.createdAt}
                  category={blogData.category[0].name}
                />
              </div>
              <div className="bg-black bg-opacity-25 py-5 pr-5  col-span-1 hidden md:inline">
                <div className="bg-white h-full w-full">
                  <div className="p-2"></div>
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
                  src={blogData.coverImage.file.url}
                  alt={blogData.coverImage.title}
                  className="w-full object-cover h-3/5 pr-3"
                />
                <div className="my-10 mr-5">
                  {/* <BlogBody body={blogData.blogBody} hel="success" /> */}
                  {renderRichText(blogData.blogBody, options)}
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

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      slug
      title
      category {
        name
      }
      author {
        name
      }
      createdAt(formatString: "MMM DD, YY")
      coverImage {
        file {
          url
        }
        title
      }
      blogBody {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            fixed(width: 1600) {
              width
              height
              src
              aspectRatio
              srcSet
            }
          }
        }
      }
    }
  }
`

export default blogParent
