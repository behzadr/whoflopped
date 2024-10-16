"use client";

import React from 'react';
import Link from 'next/link';
import SignInForm from "app/components/SignInForm";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";


export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-sky-100 flex flex-col">
            {/* Header */}
            <Header/>

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
                            <SignInForm/>
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
            <Footer/>
        </div>
    );
}