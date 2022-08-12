import * as React from 'react'
import Layout from '../components/Layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PageProps } from 'gatsby';
import { Post } from '../Types';


export const TemplatePost = (props: PageProps<{}, Post>) => {

  const image = getImage(props.pageContext.img)!

  return (
    <Layout>
      <div>
        This is: {props.pageContext.title}
        <br />
        <GatsbyImage image={image} alt="" />
        <br />
        Description:
        <br />
        {props.pageContext.description}
      </div>
    </Layout>
  )
}

export default TemplatePost