import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/Layout"

export default function Home() {
  const query = graphql`
    query MyQuery {
      datoCmsBlog {
        posts {
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
      </div>
    </Layout>
  )
} 
