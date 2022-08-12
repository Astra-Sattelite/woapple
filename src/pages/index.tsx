import * as React from "react"
import {  Link } from 'gatsby'
import Layout from "../components/Layout"

export default function Home() {

  return (
    <Layout>
      <Link to={"/posts/"}>
        <h2>----ALL POSTS WITH PAGINATION----</h2>
      </Link>
    </Layout>
  )
} 
