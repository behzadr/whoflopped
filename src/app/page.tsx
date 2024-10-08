"use client";

import React from 'react';
import Link from 'next/link';
import SignInForm from "app/components/SignInForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">Welcome to WhoFlopped</CardTitle>
                </CardHeader>
                <CardContent>
                    <SignInForm />

                    {/* Sign Up Link */}
                    <p className="text-center mt-4">
                        Don’t have an account?{' '}
                        <Link href="/auth/signup" className="text-blue-500 hover:underline">
                            Sign up
                        </Link>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};

export default LandingPage;