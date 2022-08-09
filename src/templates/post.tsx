import React from 'react'
import { Post } from "../Types"
import Layout from '../components/Layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function GenericPost(props) {

  const image = getImage(props.pageContext.img)!

  return (
    <Layout>
      <div>
        This is: {props.pageContext.title}
        <br />
        <GatsbyImage image={image} alt={props.pageContext.img} />
        <br />
        {JSON.stringify(props)}
      </div>
    </Layout>
  )
}
