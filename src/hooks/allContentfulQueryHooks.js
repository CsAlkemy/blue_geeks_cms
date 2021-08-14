import { useStaticQuery, graphql } from "gatsby"

export const BlogCardQuery = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allContentfulBlog {
          nodes {
            slug
            title
            author {
              name
            }
            blogSummary
            category {
              name
            }
            publishingDate(formatString: "DD MMM YY")
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
  )
  return data.allContentfulBlog
}
