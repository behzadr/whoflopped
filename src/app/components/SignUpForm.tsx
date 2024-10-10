import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Add your form submission logic here (e.g., call to the API)
        console.log("Form submitted:", formData);

        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Sign-up successful!");
                // Redirect or show success message
            } else {
                console.error("Sign-up failed.");
                // Handle error
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="mt-1 block w-full"
                />
            </div>
            <div className="mb-4">
                <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="mt-1 block w-full"
                />
            </div>
            <div className="mb-4">
                <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="mt-1 block w-full"
                />
            </div>
            <div className="mb-6">
                <Input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="mt-1 block w-full"
                />
            </div>
            <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
                Sign Up
            </Button>
        </form>
    );
};

export default SignUpForm;
