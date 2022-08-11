import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Pagination } from "../Types"

export default function posts({ pageContext, data }) {

  return (
    <div>
      {data.allDatoCmsContenttype.nodes.map(
        content => 
          <Link to={"/post/" + content.slug}>
            <div key={content.slug}>
              <h1>{content.title}</h1>
            </div>
          </Link>
      )}
    </div>
  )
}

export const query = graphql`
  query pageQuery($limit: Int!, $skip: Int!) {
    allDatoCmsContenttype(limit: $limit, skip: $skip) {
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