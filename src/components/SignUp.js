import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useState } from "react";



function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const [inProp, setInProp] = useState(true);
    return (
        <div className="login-center">

            <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-grp">
                    <input type="text"
                        aria-label="name" name="name" id="name"
                        required
                    />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="input-grp">
                    <input type="email" placeholder="Email"
                        aria-label="email" autoComplete="email"
                    />
                </div>
                <div className="input-grp">
                    <input type="text" placeholder="Username"
                        aria-label="username" autoComplete="username"
                    />
                </div>
                <div className="input-grp">
                    <input type="password" placeholder="Password"
                        aria-label="Password" autoComplete="password"
                    />
                </div>

                <div className="input-grp">
                    <button className="btn-primary login-btn">
                        Sign Up
                        </button>
                </div>

            </form>

        </div>
    );
}

export default SignUp;
