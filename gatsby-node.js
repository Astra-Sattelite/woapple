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
      allDatoCmsContenttype {
        nodes {
          slug
          title
          description
          img {
            gatsbyImageData
          }
          topics {
            id
          }
        }
      }
    }
  `)

  const posts = data.datoCmsPosts1.allposts
  const contents = data.allDatoCmsContenttype.nodes

  posts.forEach(node => {
    actions.createPage({
      path: "/post/" + node.slug,
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

  const contentsPerPage = 3
  const numPages = Math.ceil(contents.length / contentsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? '/posts/1' : `/posts/${i + 1}`,
      component: require.resolve(`./src/templates/posts.tsx`),
      context: {
        limit: contentsPerPage,
        skip: i * contentsPerPage,
        numPages,
        currentPage: i + 1
      }
    })
  })

  posts.forEach(node => {
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