import UserList from '@/app/components/UserList';
import AddUserForm from '@/app/components/AddUserForm';

export default function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <AddUserForm />
            <UserList />
        </div>
    );
}
