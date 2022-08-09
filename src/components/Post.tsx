import React from 'react'
import { Post } from "../Types"
import { Link } from "gatsby"

export default function NewPost(props: Post) {
  return (
    <Link to={"/posts/" + props.slug}>
      <div>
        Hi, I am {props.title}
        <br />
        And I have {props.slug} slug
      </div>
    </Link>
  )
}
