import React, { useContext } from 'react'
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import ThemeContext from '../contexts/ThemeContext';

const DisplayToggle = () => {
  const {isDark, toggleTheme} = useContext(ThemeContext)
  
  return (
    <button
      className={`display-toggle${isDark ? ' dark' : ''}`}
      onClick={toggleTheme}
    >
      { isDark ? <BsFillSunFill /> : <BsFillMoonFill /> }
    </button>
  )
}

export default DisplayToggle