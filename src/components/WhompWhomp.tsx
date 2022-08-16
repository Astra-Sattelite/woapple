import React from 'react'
import { DatoCmsPost } from '../Types';
import { getImage, GatsbyImage } from "gatsby-plugin-image"

export const WhompWhomp = (props: DatoCmsPost) => {

  const image = getImage(props.img.gatsbyImageData)!

  return (
    <div className="w-4/6 h-64 border-2 rounded-2xl flex flex-row">
      <GatsbyImage 
        image={image} alt=""
        className="h-full w-8/12 border-2xl border-hidden rounded-2xl box-border"
      />
      <div className="h-full w-4/12 rounded-2xl box-border">
        {props.title}
      </div>
    </div>
  )
}

export default WhompWhomp