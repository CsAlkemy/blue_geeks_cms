import { useStaticQuery, graphql } from "gatsby"

export const useAllContentfulBlogs = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allContentfulBlog {
          edges {
            node {
              slug
              title
              publishingDate(formatString: "DD MMM YY")
              coverImage {
                fixed(quality: 10) {
                  src
                }
                title
              }
              category {
                name
              }
              author {
                name
              }
              blogSummary
            }
          }
        }
      }
    `
  )
  return data.allContentfulBlog
}
