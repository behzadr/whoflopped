'use client';

import { useEffect, useState } from 'react';

type User = {
    id: number;
    email: string;
};

export default function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    console.log("UserList users array1:", users);

    useEffect(() => {
        console.log("UserList users array2:", users);
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/users');
                console.log('Response status:', response.status);
                const data = await response.json();
                console.log('Data:', data);
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
                setUsers([]);
            }
        };

        fetchUsers();
    }, []);
    console.log("UserList users array3:", users);
    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.email}</li>
                ))}
            </ul>
        </div>
    );
}
