'use client';

import { useEffect, useState } from 'react';

type User = {
    id: number;
    email: string;
};

export default function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/users');
                if (!response.ok) {
                    throw new Error(`Failed to fetch users: ${response.statusText}`);
                }
                const data = await response.json();
                console.log('Fetched users:', data); // Check what data is returned
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
                setError('Failed to load users. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <p className="text-center text-gray-500">Loading users...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className="mt-6">
            <h1 className="text-2xl font-semibold mb-4">User List</h1>
            <ul className="list-disc pl-5">
                {users.map((user) => (
                    <li key={user.id} className="text-lg">
                        {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}
