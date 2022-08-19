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
      <> 
        <p className="w-5/6 max-w-4xl text-3xl font-bold text-left mt-10">
          {props.pageContext.topic + " topic"}
        </p>
        {props.data.allDatoCmsPost.edges.map(
          post =>
            <WhompWhomp {...post.node} key={"__categoryk" + post.node.slug}/>
        )}
      </>
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
          theme
          shortdescr
          seoMetaTags {
            tags
          }
        }
      }
    }
  }
`

export default TemplateCategory