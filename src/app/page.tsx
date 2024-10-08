import React from 'react';
import Link from 'next/link';

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">Welcome to WhoFlopped</h1>

                <p className="text-center mb-4">Sign in to continue or sign up to create an account.</p>

                {/* Sign In Button */}
                <Link href="/auth/signin">
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-4">
                        Sign In
                    </button>
                </Link>

                {/* Sign Up Button */}
                <Link href="/auth/signup">
                    <button className="w-full bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded">
                        Sign Up
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
