import * as React from 'react'
import Layout from '../components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div>
        <img src="../../static/404.jpg" alt="../../static/404.jpg" />
        <h2>404</h2>
        <p>Page existence is a lie</p>
      </div>
    </Layout>
  )
}