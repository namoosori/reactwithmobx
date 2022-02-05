import React, { Component } from 'react'

class Nav extends Component {
  render(){
    return (
      <nav className='navtop'>
        <h2>Namoosori</h2>
        <ul className='nav-links'>
          <li>Main</li>
          <li>About</li>
          <li>Lessons</li>
        </ul>
      </nav>
    )
  }
}

export default Nav;