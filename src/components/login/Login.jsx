import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ setIsAuthenticated, type }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const isLogin = type === 'login';

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if(isLogin){
                const response = await axios.post('http://localhost:8080/auth/login', { username, password });
                localStorage.setItem('user', response.data.username);
                localStorage.setItem('role', response.data.role);
                localStorage.setItem('pass', password);
                setIsAuthenticated = true;
                navigate('/products');
            }else{
                const response = await axios.post('http://localhost:8080/auth/register',
                    { username, password, email, phone, role });
                alert('Registration successful! Please log in.');
                navigate('/login');
            }
        } catch (error) {
            setError(isLogin ? 'Credenciales invalidas. Por favor vuelve a intentar':
                "Error al ejecutar el registro");
        }
    };

    return (
        <div className="body-login">
            <div className="login-container">
                <h2>{isLogin ? 'Inicio de sesión' : 'Registro'}</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="username">Usuario:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {!isLogin && (
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    {!isLogin && (
                        <div>
                            <label htmlFor="phone">Phone:</label>
                            <input
                                type="text"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    {!isLogin && (
                        <div>
                            <label htmlFor="role">Role:</label>
                            <input
                                type="text"
                                id="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    <button type="submit">{isLogin ? 'Ingresar' : 'Registrarse'}</button>
                    {isLogin && (
                        <a href="/register">Registrarse</a>)}
                </form>
            </div>
        </div>
    );
}

export default Login;