import { useStaticQuery, graphql } from "gatsby"

export const CategoryDataQuery = () => {
  const data = useStaticQuery(
    graphql`
      query CategoryQuery {
        allContentfulCategory {
          nodes {
            id
            name
            description
            icon
          }
        }
      }
    `
  )
  return data.allContentfulCategory
}
