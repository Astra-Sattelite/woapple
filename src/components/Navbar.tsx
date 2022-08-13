import * as React from 'react'
import { Link } from "gatsby"

export const Navbar = () => {
  return (
    <nav>
      <h1 className="text-3xl font-bold text-orange-400">Navbar</h1>
      <div>
        <Link to="/">
          <h2>Main Page</h2>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar