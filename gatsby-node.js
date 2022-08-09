const path = require(`path`)

exports.createPages = async function ({ graphql, actions }) {
  const { data } = await graphql(`
    query MyQuery {
      allDatoCmsPost {
        nodes {
          slug
          title
        }
      }
    }
  `)

  data.allDatoCmsPost.nodes.forEach(node => {
    actions.createPage({
      path: "/posts/" + node.slug,
      component: require.resolve(`./src/templates/post.tsx`),
      context: { slug: node.slug, title: node.title }
    })
  })
}