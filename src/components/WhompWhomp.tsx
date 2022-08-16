import React from 'react'
import { DatoCmsPost } from '../Types';
import { getImage, GatsbyImage } from "gatsby-plugin-image"

export const WhompWhomp = (props: DatoCmsPost) => {

  const image = getImage(props.img.gatsbyImageData)!

  return (
    <div className="w-4/6 h-64 border-2 rounded-2xl flex flex-row">
      <div className="h-full w-7/12 rounded-2xl box-border">
        <GatsbyImage
          image={image} alt=""
          className="h-full w-full rounded-2xl"
        />
      </div>
      <div className="h-full w-5/12 rounded-2xl box-border">
        {props.title}
      </div>
    </div>
  )
}

export default WhompWhomp