import * as React from "react"
import {  Link } from 'gatsby'
import Layout from "../components/Layout"

export const Home = () => {

  return (
    <Layout>
      <Link to={"/posts/"} className="text-7xl">
        TO ALL POSTS WITH PAGINATION
      </Link>
    </Layout>
  )
} 

export default Home