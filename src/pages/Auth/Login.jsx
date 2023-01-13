import React, { useContext } from 'react'
import UserContext from '../../contexts/UserContext'
import { useInput } from '../../utils/custom-hooks'
import { getUserLogged, login, putAccessToken } from '../../utils/network-data'

const Login = () => {
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')
  const {setUser} = useContext(UserContext)

  async function saveUserLoggedInfo () {
    const {error, data} = await getUserLogged()
    setUser(data)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const {error, data} = await login({email, password})

    if (error) {
      alert(error)
      return
    }

    const {accessToken} = data
    putAccessToken(accessToken)

    saveUserLoggedInfo()

    alert('Berhasil masuk')
  }
  
  return (
    <div className='auth-page-wrapper'>
      <h1>Masuk</h1>
      <div className="form-wrapper">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={onEmailChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={onPasswordChange} />
        <button className="action-button" onClick={handleSubmit}>Masuk</button>
      </div>
    </div>
  )
}

export default Login