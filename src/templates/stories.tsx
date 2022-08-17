import { PageProps } from 'gatsby';
import * as React from 'react'
import Layout from '../components/Layout'
import WhompWhomp from '../components/WhompWhomp'
import { DatoCmsPost } from '../Types';

type StoriesProps = {
  datoCmsFeatured: DatoCmsPost[]
}

const Stories = (props: PageProps<{}, StoriesProps>) => {

  return (
    <Layout>
      <>
        {props.pageContext.datoCmsFeatured.map((
          post => <WhompWhomp {...post} key={"__storiesk" + post.slug}/>
        ))}
      </>
    </Layout>
  )
}

export default Stories