import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import Layout from "../components/Layout"
import { AllDatoCmsPost } from '../Types';
import WhompWhomp from "../components/WhompWhomp";

const Home = () => {

  const data: {allDatoCmsPost: AllDatoCmsPost} = useStaticQuery(query)

  return (
    <Layout>
      {data.allDatoCmsPost.nodes.map(
        post =>
          <WhompWhomp {...post} key={"__indexk" + post.slug}/>
      )}
    </Layout>
  )
}

const query = graphql`
  query IndexGetAllCmsPostsLimited {
    allDatoCmsPost(limit: 5) {
      nodes {
        title
        slug
        description
        img {
          gatsbyImageData
        }
        topics {
          topic
          slug
        }
      }
    }
  }
`

export default Home