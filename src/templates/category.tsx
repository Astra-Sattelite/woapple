import { Link } from 'gatsby'
import * as React from 'react'

export default function GenericCategory(props) {
    
  const posts = props.pageContext.posts.filter(
    post => post.topics.find(obj => obj.topic === props.pageContext.topic)
  )


  return (
    <div>
      {posts.map(
        post =>
          <Link to={"/posts/" + post.slug}>
            <div key={post.slug}>
              {post.title}
            </div>
          </Link>
      )}
    </div>
  )
}