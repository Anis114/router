import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <ul>
        
        <Link to='/Desc'><li>Desc</li></Link>
        <Link to='/'><li>home</li></Link>

    </ul>
  )
}

export default Header