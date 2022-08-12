import * as React from 'react'
import { Link } from "gatsby"

export const Navbar = () => {
  return (
    <nav>
      <h1>Navbar</h1>
      <div>
        <Link to="/">
          <h2>Main Page</h2>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar