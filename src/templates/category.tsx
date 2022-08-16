import { graphql, PageProps } from 'gatsby';
import * as React from 'react'
import Layout from '../components/Layout';
import WhompWhomp from '../components/WhompWhomp';
import { DatoCmsPost } from '../Types';

type TemplateCategoryProps = {
  topic: string,
  slug: string
}

type TemplateCategoryData = {
  allDatoCmsPost: {
    edges: [{ node: DatoCmsPost}]
  }
}

const TemplateCategory = (props: PageProps<TemplateCategoryData, TemplateCategoryProps>) => {

  return (
    <Layout>
      {props.data.allDatoCmsPost.edges.map(
        post =>
          <WhompWhomp {...post.node} key={"__categoryk" + post.node.slug}/>
      )}
    </Layout>
  )
}

export const query = graphql`
  query GetPostsForTopic($topic: String!) {
    allDatoCmsPost(filter: {topics: {elemMatch: {topic: {eq: $topic}}}}) {
      edges {
        node {
          title
          description
          img {
            gatsbyImageData
            createdAt
          }
          slug
          topics {
            topic
          }
          descriptionNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

export default TemplateCategory