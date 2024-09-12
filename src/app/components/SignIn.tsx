import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/auth/signin', { email, password });
            localStorage.setItem('token', response.data.token);
            setMessage('Signed in successfully');
        } catch (error) {
            setMessage('Error signing in');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Sign In</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default SignIn;
