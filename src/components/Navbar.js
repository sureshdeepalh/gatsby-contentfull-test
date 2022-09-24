import { Link } from "gatsby"
import React from "react"

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li> <li>
          <Link to="/tags">Tags</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
