"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("/api/auth/signin", { email, password });
            localStorage.setItem("token", response.data.token); // Store token
            window.location.href = "/dashboard"; // Redirect
        } catch (err: unknown) {
            if (axios.isAxiosError(err) && err.response?.status === 401) {
                setError("Invalid credentials. Please try again.");
            } else {
                setError("Something went wrong. Please try again later.");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email"
                />
            </div>
            <div className="space-y-2">
                <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Log In
            </Button>
        </form>
    );
};

export default SignInForm;