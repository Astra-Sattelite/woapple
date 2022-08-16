import React from 'react'
import { DatoCmsPost } from '../Types';
import { getImage, GatsbyImage } from "gatsby-plugin-image"

export const WhompWhomp = (props: DatoCmsPost) => {

  const image = getImage(props.img.gatsbyImageData)!

  return (
    <div className="w-4/6 h-64 border-2 rounded-2xl flex flex-row">
      <div className="h-full w-7/12 border-0 rounded-2xl box-border">
        <GatsbyImage
          image={image} alt=""
          className="h-full w-full rounded-2xl rounded-r-none border-r-2"
          imgStyle={{borderRadius: "1rem", borderTopRightRadius: "0px", borderBottomRightRadius: "0px"}}
        />
      </div>

      <div className="h-full w-5/12 rounded-2xl box-border flex justify-center">
        <div className="text-3xl">
          {props.title}
        </div>
      </div>
    </div>
  )
}

export default WhompWhomp