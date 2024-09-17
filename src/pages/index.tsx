import { useState, useEffect } from 'react';

interface User {
    id: number;
    email: string;
    name: string | null;
}

export default function Home() {
    const [users, setUsers] = useState<User[]>([]);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        // Fetch users when the component mounts
        fetch('/api/users')
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    const createUser = async () => {
        const res = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, name }),
        });

        const newUser = await res.json();
        setUsers([...users, newUser]);
    };

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name || 'No Name'} - {user.email}
                    </li>
                ))}
            </ul>

            <h2>Create New User</h2>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={createUser}>Create User</button>
        </div>
    );
}
