import * as React from 'react'
import Layout from '../components/Layout';
import { StaticImage } from "gatsby-plugin-image"

const NotFound = () => {
  return (
    <Layout>
      <div>
        <StaticImage src="../../static/404.jpg" alt="../../static/404.jpg" />
        <h2>404</h2>
        <p>Page existence is a lie</p>
      </div>
    </Layout>
  )
}

export default NotFound