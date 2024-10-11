"use client";

import React from "react";
import SignUpForm from "@/app/components/SignUpForm";  // Importing the existing sign-up form component
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function SignUpPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-sky-100 flex flex-col">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-12">
                {/* Sign Up Section */}
                <div className="flex flex-col md:flex-row items-center mb-16">
                    <section className="text-center md:text-left md:w-1/2 mb-4 md:mb-0">
                        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4">
                            Join WhoFlopped today!
                        </h1>
                        <p className="text-blue-700">
                            Sign up to keep track of your friends’ social commitments and stay accountable.
                        </p>
                    </section>

                    {/* Use the Sign Up Form Component */}
                    <section className="w-full md:w-1/2 max-w-md">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <SignUpForm />
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <Footer/>
        </div>
    );
}
