import { useStaticQuery, graphql } from "gatsby"

export const TopPinBlogQuery = () => {
  const data = useStaticQuery(
    graphql`
      query Query {
        allContentfulBlog(filter: { isTopPin: { eq: true } }, limit: 4) {
          nodes {
            slug
            title
            author {
              name
            }
            coverImage {
              fixed(quality: 50, resizingBehavior: THUMB) {
                src
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
