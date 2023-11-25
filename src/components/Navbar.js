import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className="navbar-container">
          <ul className="navbar-links">
            <li>
              <Link  to="/">Home</Link>
            </li>
            
            <li>
              <Link to="/parcel">Create parcel</Link>
            </li> 
            <li>
              <Link to="/about">About </Link>
              <li>
              <Link to="/tracking">Track </Link>
            </li> 
            <li>
              <Link to="/services">Services</Link>
            </li> 
            </li> 
          </ul> 
        </nav>
    </div>
  )
}

export default Header