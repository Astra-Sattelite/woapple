import * as React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from "../components/Layout"
// import NewPost from '../components/NewPost';

export default function Home() {
  // const query = graphql`
  //   query MyQuery {
  //     datoCmsPosts1 {
  //       allposts {
  //         slug
  //         title
  //         img {
  //           gatsbyImageData
  //         }
  //         description
  //         topics {
  //           topic
  //         }
  //         internal {
  //           contentDigest
  //         }
  //       }
  //     }
  //     allDatoCmsTopictype {
  //       nodes {
  //         topic
  //       }
  //     }
  //   }
  // `

  // const data = useStaticQuery(query)

  const query = graphql`
    query GetAllPostsT {
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

  const data = useStaticQuery(query)

  return (
    <Layout>
      {JSON.stringify(data)}
      <Link to={"/posts/"}>
        <h2>----ALL POSTS WITH PAGINATION----</h2>
      </Link>
    </Layout>
  )
} 
