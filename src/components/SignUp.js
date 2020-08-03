import React from 'react';
import { useState } from "react";



function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
    }
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
                    <input type="email"
                        aria-label="email" autoComplete="email"
                        name="email" id="email" required
                    />
                    <label htmlFor="email">Email</label>

                </div>
                <div className="input-grp">
                    <input type="text"
                        aria-label="username" autoComplete="username"
                        name="username" id="username" required
                    />
                    <label htmlFor="username">Username</label>
                </div>
                <div className="input-grp">
                    <input type="text" aria-label="phone-number"
                        autoComplete="phone-number" name="phone-number"
                        id="phone-number" required
                    />
                    <label htmlFor="phone-number">Phone number</label>
                </div>
                <div className="input-grp">
                    <input type="password"
                        aria-label="Password" autoComplete="password"
                        id="password" name="password" required
                    />
                    <label htmlFor="password">Password</label>
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
