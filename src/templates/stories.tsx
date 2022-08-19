import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react'
import Layout from '../components/Layout'
import WhompWhomp from '../components/WhompWhomp'
import { AllDatoCmsPost } from '../Types';

const Stories = () => {

  const query = graphql`
    query GetAllPosts {
      allDatoCmsPost(filter: {theme: {eq: "Feature"}}) {
        nodes {
          title
          description
          img {
            gatsbyImageData
            createdAt
          }
          slug
          topics {
            topic
          }
          descriptionNode {
            childMarkdownRemark {
              html
            }
          }
          theme
          shortdescr
          seoMetaTags {
            tags
          }
        }
      }
    }
  `

  const data: { allDatoCmsPost: AllDatoCmsPost } = useStaticQuery(query) 

  return (
    <Layout>
      <>
        <p className="w-5/6 max-w-4xl text-3xl font-bold text-left mt-10">Stories</p>
        {data.allDatoCmsPost.nodes.map((
          post => <WhompWhomp {...post} key={"__storiesk" + post.slug}/>
        ))}
      </>
    </Layout>
  )
}

export default Stories