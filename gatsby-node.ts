import { GatsbyNode, graphql, CreatePageArgs, useStaticQuery } from "gatsby"
import { resolve } from "path"
import { AllCmsData, Data } from "./src/Types"

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql
}) => {
  const { createPage } = actions

  const getAllCmsData: { 
    errors?: any,
    data?: Data
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
          internal {
            content
            description
            ignoreType
            mediaType
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

  if (getAllCmsData.errors) {
    console.log('ERROR', getAllCmsData.errors)
  }

  getAllCmsData.data?.allDatoCmsPost.nodes.forEach(post => {

    const page = {
      path: "/post/" + post.slug,
      component: resolve(__dirname, "./src/templates/post.tsx"),
      context: {
        slug: post.slug,
        title: post.title,
        description: post.description,
        img: post.img,
        topics: post.topics,
        internal: post.internal
      }
    }
    createPage(page)
  })

  const postsPerPage: number = 2
  const numPages: number = Math.ceil((getAllCmsData.data?.allDatoCmsPost.nodes?.length || 0) / postsPerPage)


  Array.from({ length: numPages }).forEach((_, i) => {
    const page = {
      path: i === 0 ? '/posts/' : ("/posts/" + (i + 1)),
      component: resolve(__dirname, `./src/templates/posts.tsx`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      }
    }
    console.log(page)
    createPage(page)
  })
  
  getAllCmsData.data?.allDatoCmsTopic.nodes.forEach(topic => {
    const page = {
      path: "/posts/topic/" + topic.topic,
      component: resolve(__dirname, `./src/templates/category.tsx`),
      context: {
        topic: topic.topic,
        slug: topic.slug,
        posts: getAllCmsData.data?.allDatoCmsPost.nodes
      }
    }
    createPage(page)
  })
}
