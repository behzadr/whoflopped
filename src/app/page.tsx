"use client";

import React from 'react';
import Link from 'next/link';
import SignInForm from "app/components/SignInForm";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-sky-100 flex flex-col">
            {/* Header */}
            <header className="container mx-auto px-4 py-6 flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-800">WhoFlopped</div>
                {/*<nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="#contact" className="text-blue-800 hover:text-blue-600">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>*/}
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-12">
                {/* Hero Section with Sign In Form */}
                <div className="flex flex-col md:flex-row items-center mb-16">
                    <section className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4">
                            Keep floppers accountable.
                        </h1>
                    </section>

                    {/* Sign In Form */}
                    <section className="w-full md:w-1/2 max-w-md">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <SignInForm />
                            <div className="mt-4 text-center">
                                <Link href="/auth/signup" className="text-blue-600 hover:text-blue-800">
                                    Don’t have an account? Sign up
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-blue-800 text-white py-5">
                <div className="container mx-auto px-4">
                    {/*<div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">WhoFlopped</h3>
                            <p className="text-sm">Keeping track of your social commitments.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="#about" className="hover:text-blue-300">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#careers" className="hover:text-blue-300">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#press" className="hover:text-blue-300">
                                        Press
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Resources</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="#blog" className="hover:text-blue-300">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#help" className="hover:text-blue-300">
                                        Help Center
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#guidelines" className="hover:text-blue-300">
                                        Community Guidelines
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="#privacy" className="hover:text-blue-300">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#terms" className="hover:text-blue-300">
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#cookies" className="hover:text-blue-300">
                                        Cookie Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>*/}
                    <div className=" text-center text-sm">
                        <p>&copy; 2024 WhoFlopped. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}