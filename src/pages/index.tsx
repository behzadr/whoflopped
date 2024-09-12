import SignUp from '@/app/components/SignUp';
import SignIn from '@/app/components/SignIn';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Whoflopped !</h1>
            <SignUp />
            <SignIn />
        </div>
    );
};

export default Home;
