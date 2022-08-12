import * as React from 'react'
import { graphql, useStaticQuery, Link, PageProps } from 'gatsby';
import Pagination from '../components/Pagination';
import Layout from '../components/Layout';
import { PaginationT } from '../Types';

export default function posts(props: PageProps) {

  // const t: object = props.pageContext

  return (
    <div>
      {/* <Layout>
        {props.data.allDatoCmsContenttype.nodes.map(
          content => 
            <Link to={"/post/" + content.slug} key={content.slug}>
              <div>
                <h1>{content.title}</h1>
              </div>
            </Link>
        )}
        <Pagination {...props.pageContext} />
      </Layout> */}
    </div>
  )
}

// export const query = graphql`
//   query pageQuery($limit: Int!, $skip: Int!) {
//     allDatoCmsContenttype(limit: $limit, skip: $skip) {
//       nodes {
//         slug
//         title
//         description
//         img {
//           gatsbyImageData
//         }
//         topics {
//           id
//         }
//       }
//     }
//   }
// `