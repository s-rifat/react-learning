import React from 'react'
import "../styles/Navbar.scss"

function Navbar() {
  return (
    <div className="container">
      <ul className="navbar">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="button">Primary Button</button>
      <button className="btn-secondary">Secondary Button</button>

      <div className="box">Box with operators</div>
    </div>
  )
}

export default Navbar
