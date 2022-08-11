import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { Pagination } from "../Types"

export default function posts() {
  // const test: Pagination = props.pageContext

  const query = graphql`
    query GetContents($limit: Int!) {
      allDatoCmsContenttype(limit: $limit) {
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
  `
  // const pctx: Pagination = props.pageContext

  // const limit: number = pctx.limit
  // const skip : number = pctx.skip
  // ($limit: Int!, $skip: Int!)

  // const data = useStaticQuery(query)

  return (
    <div>
      {/* {data.allDatoCmsContenttype.nodes.map(
        content => 
          <div key={content.slug}>
            <h1>{content.title}</h1>
          </div>
      )} */}
      {/* {JSON.stringify(test)} */}
    </div>
  )
}