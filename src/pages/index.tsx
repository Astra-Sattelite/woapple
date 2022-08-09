import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/Layout"
import NewPost from '../components/Post';

export default function Home() {
  const query = graphql`
    query MyQuery {
      datoCmsBlog {
        posts {
          slug
          title
        }
      }
    }
  `

  const data = useStaticQuery(query)

  return (
    <Layout>
      <div>
        <h1>Main page</h1>
        {data.datoCmsBlog.posts.map(post => 
          <NewPost title={post.title} slug={post.slug} key={post.slug} />
        )}
      </div>
    </Layout>
  )
} 
