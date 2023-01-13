import React from 'react'
import { useInput } from '../../utils/custom-hooks'
import { register } from '../../utils/network-data'

const Register = () => {
  const [name, onNameChange] = useInput('')
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')
  const [repassword, onRepasswordChange] = useInput('')
  
  async function handleSubmit(e) {
    e.preventDefault()
    if (password !== repassword) {
      alert('Password tidak sama')
      return
    }
    
    const { error } = await register({ name, email, password })

    if (error) {
      alert(error)
      return
    }

    alert('Berhasil mendaftar')
  }
  
  return (
    <div className='auth-page-wrapper'>
      <h1>Daftar</h1>
      <div className="form-wrapper">
        <label htmlFor="name">Nama</label>
        <input type="text" id="name" value={name} onChange={onNameChange} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={onEmailChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={onPasswordChange} />
        <label htmlFor="repassword">Ulangi Password</label>
        <input type="password" id="repassword" value={repassword} onChange={onRepasswordChange} />
        <button className='action-button' onClick={handleSubmit}>Buat</button>
      </div>
    </div>
  )
}

export default Register