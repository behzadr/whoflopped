import { UserProvider } from '@/app/context/UserContext';
import UserList from '@/app/components/UserList';
import AddUserForm from '@/app/components/AddUserForm';

export default function HomePage() {
    return (
        <UserProvider>
            <div>
                <h1>Home Page!</h1>
                <AddUserForm />
                <UserList />
            </div>
        </UserProvider>
    );
}
