import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import Layout from "../components/Layout"
import { AllDatoCmsPost } from '../Types';
import WhompWhomp from "../components/WhompWhomp";
import Featured from '../components/Featured';

const Home = () => {

  const data: {allDatoCmsPost: AllDatoCmsPost} = useStaticQuery(query)

  return (
    <Layout>
      <>
        <p className="w-5/6 max-w-3xl text-2xl font-bold text-left">Latest Posts</p>
        {data.allDatoCmsPost.nodes.map(
          post =>
            <WhompWhomp {...post} key={"__indexk" + post.slug}/>
        )}
        <Featured />
      </>
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
          createdAt
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