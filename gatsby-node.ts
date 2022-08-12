import { GatsbyNode, graphql, CreatePageArgs, useStaticQuery } from "gatsby"
import { resolve } from "path"
import { AllCmsData } from "./src/Types"

type Person = {
  id: number
  name: string
  age: number
}

const query = graphql`
  query GetAllPosts {
    allDatoCmsPost {
      nodes {
        title
        description
        img {
          gatsbyImageData
        }
        slug
        topics {
          topic
        }
      }
    }
    allDatoCmsTopic {
      nodes {
        topic
        slug
      }
    }
  }
`

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql
}) => {
  const { createPage } = actions

  const getAllCmsData: { 
    errors?: any,
    resp?: AllCmsData
  } = await graphql(`
    query GetAllPosts {
      allDatoCmsPost {
        nodes {
          title
          description
          img {
            gatsbyImageData
          }
          slug
          topics {
            topic
          }
        }
      }
      allDatoCmsTopic {
        nodes {
          topic
          slug
        }
      }
    }
  `)

  getAllCmsData.resp?.data.allDatoCmsPost.nodes.forEach(post => {
    
    const page = {
      path: "/post/" + post.slug,
      component: resolve("./src/templates/post.tsx"),
      context: {
        slug: post.slug,
        title: post.title,
        description: post.description,
        img: post.img,
        topics: post.topics,

      }
    }
    createPage(page)
  })
}


// exports.createPages = async function ({ graphql, actions }) {
//   const { data } = await graphql(`
//     query MyQuery {
//       datoCmsPosts1 {
//         allposts {
//           slug
//           title
//           img {
//             gatsbyImageData
//           }
//           description
//           topics {
//             topic
//           }
//           internal {
//             contentDigest
//           }
//         }
//       }
//       allDatoCmsTopictype {
//         nodes {
//           topic
//           slug
//         }
//       }
//       allDatoCmsContenttype {
//         nodes {
//           slug
//           title
//           description
//           img {
//             gatsbyImageData
//           }
//           topics {
//             id
//           }
//         }
//       }
//     }
//   `)

//   const posts = data.datoCmsPosts1.allposts
//   const contents = data.allDatoCmsContenttype.nodes

//   posts.forEach(node => {
//     actions.createPage({
//       path: "/post/" + node.slug,
//       component: require.resolve(`./src/templates/post.tsx`),
//       context: { 
//         slug: node.slug, 
//         title: node.title, 
//         description: node.description,
//         img: node.img,
//         topics: node.topics,
//         internal: node.internal
//       }
//     })
//   })

//   data.allDatoCmsTopictype.nodes.forEach(node => {
//     actions.createPage({
//       path: "/posts/topic/" + node.topic,
//       component: require.resolve(`./src/templates/category.tsx`),
//       context: {
//         topic: node.topic,
//         slug: node.slug,
//         posts: data.datoCmsPosts1.allposts
//       }
//     })
//   })

//   const contentsPerPage = 3
//   const numPages = Math.ceil(contents.length / contentsPerPage)
//   Array.from({ length: numPages }).forEach((_, i) => {
//     actions.createPage({
//       path: i === 0 ? '/posts/' : `/posts/${i + 1}`,
//       component: require.resolve(`./src/templates/posts.tsx`),
//       context: {
//         limit: contentsPerPage,
//         skip: i * contentsPerPage,
//         numPages,
//         currentPage: i + 1
//       }
//     })
//   })

//   posts.forEach(node => {
//     actions.createPage({
//       path: "/posts/topic/" + node.topic,
//       component: require.resolve(`./src/templates/category.tsx`),
//       context: {
//         topic: node.topic,
//         slug: node.slug,
//         posts: data.datoCmsPosts1.allposts
//       }
//     })
//   })
// }

// // export type Post = {
// //   slug: string,
// //   title: string, 
// //   description: string,
// //   img: { path: string },
// //   topics: Topic[],
// //   internal: { contentDigest: string }
// // }