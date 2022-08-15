import * as React from 'react'
import Layout from '../components/Layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PageProps } from 'gatsby';
import { Post } from '../Types';


export const TemplatePost = (props: PageProps<{}, Post>) => {

  const image = getImage(props.pageContext.img)!
  const html = props.pageContext.descriptionNode.childMarkdownRemark.html

  return (
    <Layout>
      <div>
        This is: {props.pageContext.title}
        <br />
        <GatsbyImage image={image} alt="" />
        <br />
        Description:
        <br />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

const TemplatePostMemo = React.memo(TemplatePost)

export default TemplatePostMemo