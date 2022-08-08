import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from 'gatsby'

export default function Home() {
  const query = graphql`
    query MyQuery {
      datoCmsVerylongname {
        megabool
        megatitle
      }
    }
  `

  const data = useStaticQuery(query)

  return (
    <div>
      {JSON.stringify(data)}
      <br />
      {data.datoCmsVerylongname.megatitle}
    </div>
  )
} 
