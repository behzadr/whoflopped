"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        console.log("Form submitted"); // Debugging line

        try {
            const response = await axios.post("/api/auth/signup", {
                email,
                password,
                firstName,
                lastName,
            });
            localStorage.setItem("token", response.data.token); // Store token
            router.push('/');
        } catch (err: unknown) {
            console.error(err); // Debugging line
            if (axios.isAxiosError(err) && err.response?.status === 400) {
                setError("Invalid data. Please check your inputs.");
            } else {
                setError("Something went wrong. Please try again later.");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    placeholder="First Name"
                />
            </div>
            <div className="space-y-2">
                <Input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    placeholder="Last Name"
                />
            </div>
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
                Sign Up
            </Button>
        </form>
    );
};

export default SignUpForm;
