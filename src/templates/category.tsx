import { graphql, Link, PageProps } from 'gatsby';
import * as React from 'react'
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
    <div>
      {props.data.allDatoCmsPost.edges.map(
        post =>
          <Link to={"/post/" + post.node.slug} key={post.node.slug}>
            <div key={post.node.slug}>
              <h3>{post.node.title}</h3>
            </div>
          </Link>
      )}
    </div>
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