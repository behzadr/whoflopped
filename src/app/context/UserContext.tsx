'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

type User = {
    id: number;
    email: string;
};

type UserContextType = {
    users: User[];
    addUser: (user: User) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [users, setUsers] = useState<User[]>([]);

    const addUser = (user: User) => {
        setUsers((prevUsers) => [...prevUsers, user]);
    };

    return (
        <UserContext.Provider value={{ users, addUser }}>
    {children}
    </UserContext.Provider>
);
};
