exports.createPages = async function ({ graphql, actions }) {
  const { data } = await graphql(`
    query MyQuery {
      datoCmsBlog {
        posts {
          slug
        }
      }
    }
  `)

  // data.

  // const { data } = await graphql(`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // data.allMarkdownRemark.edges.forEach(edge => {
  //   const slug = edge.node.fields.slug
  //   actions.createPage({
  //     path: slug,
  //     component: require.resolve(`./src/pages/test.tsx`),
  //     context: { slug: slug },
  //   })
  // })
}