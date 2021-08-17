//Blog Details Page
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allContentfulBlog {
        nodes {
          title
          slug
        }
      }
    }
  `)

  const category = await graphql(`
    {
      allContentfulCategory {
        nodes {
          id
          name
        }
      }
    }
  `)
  if (category.errors) {
    reporter.panic("Error Loading Blog", JSON.stringify(category.errors))
  }
  if (result.errors) {
    reporter.panic("Error Loading Blog", JSON.stringify(result.errors))
  }

  result.data.allContentfulBlog.nodes.forEach(blog => {
    actions.createPage({
      path: `/blog/${blog.slug}/`,
      component: require.resolve("./src/components/Blog/blogParent.js"),
      context: {
        slug: blog.slug,
        title: blog.title,
      },
    })
  })

  category.data.allContentfulCategory.nodes.forEach(page => {
    actions.createPage({
      path: `/category/${page.name}/`,
      component: require.resolve("./src/components/Common/categoryMaster.js"),
      context: {
        id: page.id,
        name: page.name,
      },
    })
  })
}
