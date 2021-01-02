import React from 'react';
import Login from './../components/Login';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import SignUp from './../components/SignUp';
import { useEffect, useRef, useState } from 'react';
import Typewriter from './../util/typewriter';
import { connect } from 'react-redux';
import { createUserSuccess as createUser, loginSuccess as login } from '../redux/actions/authActions';

//import PropTypes from 'prop-types';


function AuthPage({ location, createUser, login, history }) {
    const { pathname } = location;
    const typingRef = useRef(null);
    const wait = 30000;

    useEffect(() => {
        const words = ["Together we can make the world a better place.",
            "We pride ourselves in the number of resolved incidents, but we aim for even better results.",
            "Let us tell the stories that matter.",
            "Even you can help make the world a better place."
        ];
        new Typewriter(typingRef.current, words, wait).type();
        return () => {
        }
    }, []);

    const [state, setData] = useState({
        fullname: '',
        username: '',
        email: '',
        phone_number: '',
        password: '',
        admin_code: '',
    });
    // const [signUpErrors, setSignUpErrors] = useState({});
    // const [loginErrors, setLoginErrors] = useState({});

    const handleChange = (event) => {
        const { value, name } = event.target;
        setData({ ...state, [name]: value });

    }

    const handleSignupSubmit = async (event) => {
        event.preventDefault();
        const fullname = state.fullname && state.fullname.split(/\s+/);
        let newState;

        if (!newState && fullname && fullname.length > 1) {
            const firstname = fullname[0];
            const lastname = fullname[fullname.length - 1];
            newState = { ...state, firstname: firstname, lastname: lastname };
            delete newState.fullname;
        }
        console.log(newState)
         createUser(newState).then(() => history.push('/auth/login')).catch(error => console.log(error));
    }

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        login({ email: state.email, password: state.password }).then(() => history.push('/profile')).catch(error => console.log(error));
    }

    return (
        <div className="main">
            <div className="typing-div" style={{ color: 'white', position: 'absolute' }}>
                <h2>
                    <span ref={typingRef} className="typing-span"></span>
                </h2>
            </div>
            <div className="form-wrapper">
                <div className="form-section">
                    {/*IEF*/}
                    {(() => {
                        if (pathname === "/auth/login") {
                            return (
                                <>
                                    <h1>Sign In</h1>
                                    <p>Sign in or <Link to="/auth/sign-up">Create account</Link></p>
                                </>
                            )
                        } else {
                            return (
                                <>
                                    <h1>Sign Up</h1>
                                    <p>Already have an account? <Link to="/auth/login">Sign in</Link></p>
                                </>
                            )
                        }
                    })()}
                    <Switch>
                        <Route exact path="/auth/login" render={() => (
                            <Login data={state} handleInput={handleChange} handleSubmit={handleLoginSubmit} />)} />
                        <Route exact path="/auth/sign-up" render={() => (
                            <SignUp data={state} handleInput={handleChange} handleSubmit={handleSignupSubmit} />
                        )} />
                        <Redirect from='/auth' to='/auth/sign-up' />
                    </Switch>
                </div>
                <div className="form-footer">
                    <p>
                        <span>Terms</span>
                        <span>Privacy</span>
                        <span>Contact us</span>
                        <small className="copyright">
                            Copyright &copy; 2020 All rights reserved | Made by
                            <span><Link to="https://github.com/Abuchikings" target="_blank" rel="noopener noreferrer">  Abuchi Kingsley</Link></span>
                        </small>
                    </p>
                </div>

            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    };
}
const mapDispatchToProps = {
    createUser,
    login
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
