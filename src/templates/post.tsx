import React from 'react'
import { Post } from "../Types"
import Layout from '../components/Layout';

export default function GenericPost(props) {
  return (
    <Layout>
      <div>
        This is: {props.pageContext.title}
        {/* {JSON.stringify(props)} */}
      </div>
    </Layout>
  )
}
