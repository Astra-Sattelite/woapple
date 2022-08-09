import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/Layout"
import NewPost from '../components/NewPost';

export default function Home() {
  const query = graphql`
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
    }
  `

  const data = useStaticQuery(query)

  return (
    <Layout>
      <div>
        <h1>Main page</h1>
        {data.datoCmsPosts1.allposts.map(NewPost)}
      </div>
    </Layout>
  )
} 
