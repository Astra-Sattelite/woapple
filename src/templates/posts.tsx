import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby';
import Pagination from '../components/Pagination';
import Layout from '../components/Layout';

export default function posts({ pageContext, data }) {

  return (
    <div>
      <Layout>
        {data.allDatoCmsContenttype.nodes.map(
          content => 
            <Link to={"/post/" + content.slug} key={content.slug}>
              <div>
                <h1>{content.title}</h1>
              </div>
            </Link>
        )}
        <Pagination {...pageContext} />
      </Layout>
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