import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
      Home Page
      <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>

    </>
    </div>
  )
}

export default Home
