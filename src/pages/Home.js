import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'




const Home = () => {
    return (
        <>
<Header></Header>
        
        <div>
            I am home
            <span><Link to="/auth">  SignUp</Link></span>

        </div>
        </>
    );
}

export default Home;
