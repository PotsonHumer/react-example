import React from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {
  return (
    <ul id='menu' style={{ marginBottom: 30 }}>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/count'>Count</Link>
      </li>
      <li>
        <Link to='/class-component'>Class Component Count</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/login-redux'>Login Redux</Link>
      </li>
      <li>
        <Link to='/user'>User</Link>
      </li>
    </ul>
  )
}

export default Menu
