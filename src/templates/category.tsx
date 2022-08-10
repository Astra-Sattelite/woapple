import * as React from 'react'

export default function GenericCategory(props) {
    
  const posts = props.pageContext.posts.filter(
    post => post.topics.find(obj => obj.topic === props.pageContext.topic)
  )


  return (
    <div>
      {posts.map(
        post =>
          <div key={post.slug}>
            {post.title}
          </div>
      )}
    </div>
  )
}