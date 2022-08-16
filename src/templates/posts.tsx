import * as React from 'react'
import { graphql, Link, PageProps } from 'gatsby';
import Pagination from '../components/Pagination';
import Layout from '../components/Layout';
import { PaginationT, AllDatoCmsPost } from '../Types';
import WhompWhomp from '../components/WhompWhomp';

type TemplatePostsData = {
  allDatoCmsPost: AllDatoCmsPost
}

export const TemplatePosts = (props: PageProps<TemplatePostsData, PaginationT>) => {

  return (
    <Layout>
      <>
        {props.data.allDatoCmsPost.nodes.map(
          post => 
            <WhompWhomp {...post} key={"__postsk" + post.slug}/>
        )}
        <Pagination {...props.pageContext} />
      </>
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

export default TemplatePosts