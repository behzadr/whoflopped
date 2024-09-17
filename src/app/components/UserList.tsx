'use client';

import { useEffect, useState } from 'react';

type User = {
    id: number;
    email: string; // Add other fields according to your schema
};

export default function UserList() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.email}</li> // Adjust fields as per your schema
                ))}
            </ul>
        </div>
    );
}
