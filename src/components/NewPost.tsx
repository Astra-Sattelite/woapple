import React from 'react'
import { Post } from "../Types"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// import styles from "../styles/newpost.module.css"

export default function NewPost(props: Post) {

  return (
    <Link to={"/posts/" + props.slug} className="">
      <div>
        Hi, I am {props.title}
        <br />
        And I have {props.slug} slug
      </div>
    </Link>
  )
}
