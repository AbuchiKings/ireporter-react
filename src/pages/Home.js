import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div>
            I am home
            <span><Link to="/auth">  SignUp</Link></span>

        </div>
    );
}

export default Home;
