import * as React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"

export default function Categories() {
  const query = graphql`
    query MyDQuery {
      allDatoCmsTopictype {
        nodes {
          topic
        }
      }
    }
  `
  const data = useStaticQuery(query)

  return (
    <div>

      {data.allDatoCmsTopictype.nodes.map(
        obj => 
          <Link to={"/posts/topic/" + obj.topic}>
            <div>{obj.topic}</div>
          </Link>
      )}
    </div>
  )
}