import React from 'react'
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav>
      <h1>Nav bar</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
      </div>
    </nav>
  )
}
