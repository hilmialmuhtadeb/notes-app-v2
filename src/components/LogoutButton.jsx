import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { GrLogout } from "react-icons/gr";

const LogoutButton = ({ user }) => {
  // useEffect(() => {
  //   console.log(user)
  // })
  
  function logoutHandler () {
    localStorage.removeItem('accessToken')
    window.location.reload()
  }
  
  return (
    <button
      className='logout-button'
      onClick={logoutHandler}
    >
      <p>{user.name}</p>
      <GrLogout/>
    </button>
  )
}

LogoutButton.propTypes = {
  user: PropTypes.object.isRequired
}

export default LogoutButton