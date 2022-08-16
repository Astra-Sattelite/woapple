import * as React from 'react'
import { graphql, Link, PageProps } from 'gatsby';
import Pagination from '../components/Pagination';
import Layout from '../components/Layout';
import { PaginationT, AllDatoCmsPost } from '../Types';

type TemplatePostsData = {
  allDatoCmsPost: AllDatoCmsPost
}

export const TemplatePosts = (props: PageProps<TemplatePostsData, PaginationT>) => {

  return (
    <Layout>
      <div>
        {props.data.allDatoCmsPost.nodes.map(
          post => 
            <Link to={"/post/" + post.slug} key={post.slug}>
              <div>
                <h1>{post.title}</h1>
              </div>
            </Link>
        )}
        <Pagination {...props.pageContext} />
      </div>
    </Layout>
  )
}


export const query = graphql`
  query GetAllCmsPostsLimited($limit: Int!, $skip: Int!) {
    allDatoCmsPost(limit: $limit, skip: $skip) {
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

export default TemplatePosts