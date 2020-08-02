import React from 'react';
import Login from './../components/Login';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import SignUp from './../components/SignUp';
import { useEffect, useRef } from 'react';
import Typewriter from './../util/typewriter';


function AuthPage(props) {
    const { pathname } = props.location;

    const typingRef = useRef(null);
    const words = ["Together we can make the world a better place.",
        "We pride ourselves in the number of resolved incidents, but we aim for even better results.",
        "Let us tell the stories that matter.", 
        "The future is now."
    ];
    const wait = 5000;

    useEffect(() => {
        new Typewriter(typingRef.current, words, wait).type();
        return () => {
            console.log('Out of here')
        }
    });


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
                        <Route exact path="/auth/login" component={Login} />
                        <Route exact path="/auth/sign-up" component={SignUp} />
                        <Redirect from='/auth' to='/auth/sign-up' />
                    </Switch>
                </div>
                <div className="form-footer">
                    <p>
                        <span>Pricing</span>
                        <span>Terms</span>
                        <span>Privacy</span>
                        <span>Contact us</span>
                        <small className="copyright">
                            Copyright &copy; 2020 All rights reserved | Made by
                            {/* <span><Link to="/">  Abuchi Kingsley</Link></span> */}
                        </small>
                    </p>
                </div>

            </div>
        </div>
    );
}

export default AuthPage;
