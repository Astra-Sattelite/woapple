const path = require(`path`)

exports.createPages = async function ({ graphql, actions }) {
  const { data } = await graphql(`
    query MyQuery {
      datoCmsPosts1 {
        allposts {
          slug
          title
          img {
            gatsbyImageData
          }
          description
          topics {
            topic
          }
          internal {
            contentDigest
          }
        }
      }
      allDatoCmsTopictype {
        nodes {
          topic
          slug
        }
      }
    }
  `)

  data.datoCmsPosts1.allposts.forEach(node => {
    actions.createPage({
      path: "/posts/" + node.slug,
      component: require.resolve(`./src/templates/post.tsx`),
      context: { 
        slug: node.slug, 
        title: node.title, 
        description: node.description,
        img: node.img,
        topics: node.topics,
        internal: node.internal
      }
    })
  })

  data.allDatoCmsTopictype.nodes.forEach(node => {
    actions.createPage({
      path: "/posts/topic/" + node.topic,
      component: require.resolve(`./src/templates/category.tsx`),
      context: {
        topic: node.topic,
        slug: node.slug,
        posts: data.datoCmsPosts1.allposts
      }
    })
  })
}

// export type Post = {
//   slug: string,
//   title: string, 
//   description: string,
//   img: { path: string },
//   topics: Topic[],
//   internal: { contentDigest: string }
// }