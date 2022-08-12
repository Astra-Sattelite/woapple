import * as React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"
import { AllDatoCmsTopic } from '../Types';

export const Categories = () => {

  const query = graphql`
    query GetAllCmsTopics {
      allDatoCmsTopic {
        nodes {
          topic
          slug
        }
      }
    }
  `
  const data: { allDatoCmsTopic: AllDatoCmsTopic } = useStaticQuery(query)

  return (
    <div>
      <h2>Categories:</h2>
      {data.allDatoCmsTopic.nodes.map(
        obj => 
          <Link to={"/posts/topic/" + obj.slug} key={obj.slug}>
            <div><h3>{obj.topic}</h3></div>
          </Link>
      )}
    </div>
  )
}

export default Categories