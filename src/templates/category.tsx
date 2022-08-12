import { Link, PageProps } from 'gatsby';
import * as React from 'react'
import { DatoCmsPost } from '../Types';

type TemplateCategoryProps = {
  topic: string,
  slug: string,
  posts: DatoCmsPost[]
}

export const TemplateCategory = (props: PageProps<{}, TemplateCategoryProps>) => {

  const posts = props.pageContext.posts.filter(
    post => post.topics.find(obj => obj.topic === props.pageContext.topic)
  )

  return (
    <div>
      {posts.map(
        post =>
          <Link to={"/post/" + post.slug} key={post.slug}>
            <div key={post.slug}>
              <h3>{post.title}</h3>
            </div>
          </Link>
      )}
    </div>
  )
}

export default TemplateCategory