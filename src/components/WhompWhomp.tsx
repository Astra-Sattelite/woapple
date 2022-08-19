import React from 'react'
import { DatoCmsPost, Img } from '../Types';
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';
import { firstLetterToUpper, formatDate } from '../Utils';
import SEOPost from "./SEOPost"

const Theme = (props: {theme: string}) => {

  const theme: string = firstLetterToUpper(props.theme)

  return (
    <div className="text-2xl text-zinc-500">
      {theme}
    </div>
  )
}

const Image = (props: {image: Img}) => {

  const image = getImage(props.image.gatsbyImageData)!

  return (
    <div 
      className="
        flex items-center
        justify-center bg-white 
        h-full w-7/12
        rounded-2xl
        rounded-r-none
      hover:bg-zinc-400
        transition ease-in-out duration-700
      "
    >
      <GatsbyImage
        image={image} alt=""
        className="
          h-5/6 w-10/12 
          hover:scale-105
          transition ease-in-out duration-700
        "
      />
    </div>
  )
}

const Title = (props: {title: string}) => {

  return (
    <p className="text-3xl h-5/6 w-full font-bold mt-2">
      {props.title}
    </p>
  )
}

const PostedAt = (props: {date: Date}) => {

  const date = formatDate(props.date)

  return(
    <p className="w-full h-1/6 text-left text-zinc-500 text-sm">
      {date}
    </p>
  )
}

const WhompWhomp = (props: DatoCmsPost) => {

  const date = new Date(props.img.createdAt)

  return (
    <Link 
      to={"/post/" + props.slug}
      className="
        w-5/6 h-80
        flex flex-row 
        max-w-4xl rounded-2xl 
        overflow-hidden 
        bg-white
        text-black
        first-of-type:mt-5
      "
    >
      <SEOPost seoMetaTags={props.seoMetaTags} />
      <Image image={props.img} />
      <div className="h-full w-5/12 rounded-2xl box-border flex justify-center items-center">
        <div className="w-11/12 h-5/6 text-xl flex-col">
          <Theme theme={props.theme}/>
          <Title title={props.title}/>
          <PostedAt date={date}/>
        </div>
      </div>
    </Link>
  )
}

export default WhompWhomp