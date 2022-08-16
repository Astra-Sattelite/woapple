import React from 'react'
import { DatoCmsPost } from '../Types';
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';

const WhompWhomp = (props: DatoCmsPost) => {

  const image = getImage(props.img.gatsbyImageData)!

  const date = new Date(props.img.createdAt)

  return (
    <Link to={"/post/" + props.slug} className="w-4/6 h-64 border-2 rounded-2xl flex flex-row max-w-3xl">
      <div className="h-full w-7/12 border-0 rounded-2xl box-border">
        <GatsbyImage
          image={image} alt=""
          className="h-full w-full rounded-2xl rounded-r-none border-r-2"
          imgStyle={{borderRadius: "1rem", borderTopRightRadius: "0px", borderBottomRightRadius: "0px"}}
        />
      </div>
      <div className="h-full w-5/12 rounded-2xl box-border flex justify-center">
        <div className="w-11/12 h-11/12 text-2xl text-blue-600 flex justify-center flex-col">
          <div className="w-full h-4/6 flex justify-center">
            {props.title}
          </div>
          <div className="w-full h-2/6 flex justify-center items-center">
            {"Posted at: " + date.toLocaleDateString()}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default WhompWhomp