import { useStaticQuery, graphql } from "gatsby"

export const FeaturesBlogQuery = () => {
  const data = useStaticQuery(
    graphql`
      query FeaturesQuery {
        allContentfulBlog(filter: { isFeatured: { eq: true } }, limit: 4) {
          nodes {
            slug
            title
            blogSummary
            category {
              name
            }
            author {
              name
            }
            coverImage {
              fixed(resizingBehavior: THUMB, quality: 50) {
                src
              }
            }
          }
        }
      }
    `
  )
  return data.allContentfulBlog
}
