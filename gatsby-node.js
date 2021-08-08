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
}
