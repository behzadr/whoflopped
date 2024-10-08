import SignInForm from '@/app/components/SignInForm'; // Adjust path if necessary

const SignInPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
                <SignInForm />
            </div>
        </div>
    );
};

export default SignInPage;
