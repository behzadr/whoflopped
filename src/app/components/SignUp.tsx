import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await axios.post('/api/auth/signup', { email, password });
            setMessage('User created successfully!');
        } catch (error) {
            setMessage('Error signing up');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
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
            <button type="submit">Sign Up</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default SignUp;
