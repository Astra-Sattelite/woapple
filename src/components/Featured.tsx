import { graphql, useStaticQuery, Link } from 'gatsby';
import * as React from 'react'
import { DatoCmsPost, AllDatoCmsPost } from '../Types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { formatDate, range, scrollR } from "../Utils"
import "../styles/global.css"


type FeaturedCirclesProps = {
  num: number
}

const FeaturedCircles: React.FC<FeaturedCirclesProps> = (props) => {
  return (
    <div className="flex flex-row gap-4 items-center">
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
    <div className="flex flex-row gap-2 text-white">
      <div 
        className="
          p-5 w-0 
          h-0 border-2 
          rounded-full flex 
          justify-center items-center 
          text-1xl select-none
          hover:bg-white
          hover:text-black
          transition ease-in-out duration-500
        "
        onClick={() => scrollR(-scrollBy, "scrollableFeatured")}
      >
        {"<"}
      </div>
      <div 
        className="
          p-5 w-0 
          h-0 border-2 
          rounded-full flex 
          justify-center items-center 
          text-1xl select-none
          hover:bg-white
          hover:text-black
          transition ease-in-out duration-500
        "
        onClick={() => scrollR(scrollBy, "scrollableFeatured")}
      >
        {">"}
      </div>
    </div>
  )
}

const FeaturedPost = (props: DatoCmsPost) => {
  const image = getImage(props.img.gatsbyImageData)!

  const date = formatDate(new Date(props.img.createdAt))

  return (
    <Link 
      to={"/post/" + props.slug} id="featuredPost1"
      className="inline-block h-5/6 w-8/12 m-5 p-25 relative"
    >
      <GatsbyImage image={image} alt="" className="w-full h-full rounded-2xl" />
      <div className="
          absolute bottom-5 
          left-5 m-auto 
          text-white text-5xl 
          w-11/12 h-24 text-left 
          overflow-hidden flex 
          flex-col
        "
      >
        <p>{props.title}</p>
        <p className="text-3xl">{date}</p>
      </div>
    </Link>
  )
}

const Featured = () => {
  const query = graphql`
    query GetAllFeatureCmsPosts {
      allDatoCmsPost(
        filter: {theme: {eq: "feature"}}
        sort: {fields: img___createdAt, order: DESC}
      ) {
        nodes {
          title
          slug
          description
          img {
            gatsbyImageData
            createdAt
          }
          topics {
            topic
            slug
          }
          theme
          shortdescr
        }
      }
    }
  `

  const data: { allDatoCmsPost: AllDatoCmsPost } = useStaticQuery(query)

  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-center items-center pb-4">
      <div className="border-white w-9/12 h-8 flex flex-row justify-between text-white">
        <div className="font-bold text-left text-3xl">
          Featured Stories
        </div>
        <Link 
          to="/stories" 
          className="
            rounded-2xl text-1xl
            p-2 border-2
            border-white flex
            items-center select-none
            w-28 h-8
            justify-center
            hover:bg-white
            hover:text-black
            transition ease-in-out duration-500
          "
        >
          View All
        </Link>
      </div>
      <div 
        className="h-5/6 pb-4 w-full pt-4 overflow-x-scroll whitespace-nowrap overflow-hidden no-scrollbar scroll-smooth"
        id="scrollableFeatured"
      >
        {data.allDatoCmsPost.nodes.map(
          post => <FeaturedPost {...post} key={"__featuredpostk" + post.slug} />
        )}
      </div>
      <div className="border-white w-9/12 h-8 flex flex-row justify-between">
        <FeaturedCircles num={data.allDatoCmsPost.nodes.length} />
        <FeaturedButtons/>
      </div>
    </div>
  )
}

export default Featured