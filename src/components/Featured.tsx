import { graphql, useStaticQuery, Link } from 'gatsby';
import * as React from 'react'
import { DatoCmsPost } from '../Types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { range, scrollR } from "../Utils"
import "../styles/global.css"


type FeaturedCirclesProps = {
  num: number
}

const FeaturedCircles: React.FC<FeaturedCirclesProps> = (props) => {
  return (
    <div className="flex flex-row gap-4 items-center ">
      {range(props.num).map(
        i => 
          <div className="p-1 w-0 h-0 bg-white rounded-full select-none" key={"___featuredCirclesk" + i}/>
      )}
    </div>
  )
}

const FeaturedButtons = () => {
  const scrollBy: number = 400
    
  return (
    <div className="flex flex-row gap-2">
      <div 
        className="p-5 w-0 h-0 border-2 rounded-full flex justify-center items-center text-1xl select-none"
        onClick={() => scrollR(-scrollBy, "scrollableFeatured")}
      >
        {"<"}
      </div>
      <div 
        className="p-5 w-0 h-0 border-2 rounded-full flex justify-center items-center text-1xl select-none"
        onClick={() => scrollR(scrollBy, "scrollableFeatured")}
      >
        {">"}
      </div>
    </div>
  )
}

const FeaturedPost = (props: DatoCmsPost) => {
  const image = getImage(props.img.gatsbyImageData)!
  const date = new Date(props.img.createdAt)

  return (
    <Link 
      to={"/post/" + props.slug} id="featuredPost1"
      className="inline-block border-2 h-5/6 w-11/12 m-5 relative"
    >
      <GatsbyImage image={image} alt="" className="w-full h-full" />
      <div className="absolute bottom-5 left-5 m-auto text-white text-5xl w-11/12 h-24 text-left overflow-hidden flex flex-col">
        <p>{props.title}</p>
        <p className="text-3xl">{"Posted at: " + date.toLocaleDateString()}</p>
      </div>
    </Link>
  )
}

type DatoCmsFeaturedPosts = {
  datoCmsFeatured: {
    featuredposts: DatoCmsPost[]
  } 
}

const Featured = () => {
  const query = graphql`
    query GetFeaturedPosts {
      datoCmsFeatured {
        featuredposts {
          slug
          title
          topics {
            topic
            slug
          }
          img {
            createdAt
            gatsbyImageData
          }
          description
        }
      }
    }
  `

  const data: DatoCmsFeaturedPosts = useStaticQuery(query)

  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-center items-center">
      <div 
        className="h-3/4 overflow-x-scroll whitespace-nowrap overflow-hidden no-scrollbar scroll-smooth"
        id="scrollableFeatured"
      >
        {data.datoCmsFeatured.featuredposts.map(
          post => <FeaturedPost {...post} key={"__featuredpostk" + post.slug} />
        )}
      </div>
      <div className="border-white w-11/12 h-8 flex flex-row justify-between">
        <FeaturedCircles num={data.datoCmsFeatured.featuredposts.length} />
        <FeaturedButtons/>
      </div>
    </div>
  )
}

export default Featured