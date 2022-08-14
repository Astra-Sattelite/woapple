import * as React from 'react'
import { Link } from "gatsby"

export const Navbar = () => {
  return (
    <nav className="flex-row">
      <h1 className="text-2xl font-bold text-blue-600">Navbar</h1>
      <div>
        <Link to="/">
          <h2>Main Page</h2>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar