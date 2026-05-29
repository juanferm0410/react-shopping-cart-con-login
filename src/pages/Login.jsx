import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email === 'admin@gmail.com' && password === '123456') {
      localStorage.setItem('user', JSON.stringify({ email }))
      navigate('/')
      return
    }

    setError('Correo o contraseña incorrectos')
  }

  return (
    <main className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>Iniciar sesión</h1>

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="login-error">{error}</p>}

        <button type="submit">Entrar</button>

        <p className="login-help">
          Usuario: admin@gmail.com <br />
          Contraseña: 123456
        </p>
      </form>
    </main>
  )
}