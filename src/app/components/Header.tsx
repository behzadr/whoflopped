import Link from 'next/link';

const Header = () => {
    return (
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-800 hover:text-blue-600">
                WhoFlopped
            </Link>
        </header>
    );
};

export default Header;
