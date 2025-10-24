import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../app/state/auth.jsx'
import { BASE_URL } from '../../shared/api/client.js'

export default function LoginPage() {
    const { login } = useAuth()
    const [form, setForm] = useState({
        username: '',
        password: ''
    })
    const navigate = useNavigate()

    const onChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault()

        try {
            await login(form.username, form.password)
            navigate('/dashboard')
        } catch (e) {
            console.error('Login failed', e)
        }
    }

    return (
        <div>
            <h1>Entre</h1>
            <form onSubmit={onSubmit}>

                <div>
                    <label>E-mail</label>
                    <input type="email" name='username'value={form.username} onChange={onChange}/>
                </div>

                <div>
                    <label>Senha</label>
                    <input type="password" name='password' value={form.password} onChange={onChange}/>
                </div>

                <div>
                    <a href={`${BASE_URL}/oauth2/authorization/github`}>Faça o Login com o GitHub</a>
                </div>

                <button>Entrar</button>
            </form>
        </div>
    )
}