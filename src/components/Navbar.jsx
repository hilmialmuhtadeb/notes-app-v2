import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import DisplayToggle from './DisplayToggle'
import LogoutButton from './LogoutButton';

const Navbar = () => {
  const {user} = useContext(UserContext)

  return (
    <nav>
      <Link to='/' className="logo">Notes App</Link>
      <div className="nav__right">
        {user && (
          <>
            <Link to='/notes/add'>Add Note</Link>
            <Link to='/notes/archived'>Archived</Link>
            <LogoutButton user={user} />
          </>
        )}
        <DisplayToggle />
      </div>
    </nav>
  )
}

export default Navbar