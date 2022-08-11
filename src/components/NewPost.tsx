import * as React from 'react'
import { Post } from "../Types"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// import styles from "../styles/newpost.module.css"

export default function NewPost(props: Post) {

  return (
    <Link to={"/post/" + props.slug} className="">
      <div>
        <h2>{props.title}</h2>
      </div>
    </Link>
  )
}
