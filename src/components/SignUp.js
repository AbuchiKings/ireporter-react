import React from 'react';
import { useState } from "react";



function SignUp({ data, handleInput, handleSubmit }) {
 
    return (
        <div className="signup-center">

            <form className="signup-form " onSubmit={handleSubmit} noValidate>
                <div className="input-grp">
                    <input type="text"
                        aria-label="fullname" name="fullname" id="fullname"
                        required onChange={(event) => handleInput(event)}
                        value={data.name}
                    />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="input-grp">
                    <input type="email"
                        aria-label="email" autoComplete="email" value={data.email}
                        name="email" id="email" required onChange={(event) => handleInput(event)}
                    />
                    <label htmlFor="email">Email</label>

                </div>
                <div className="input-grp">
                    <input type="text"
                        aria-label="username" autoComplete="username" value={data.username}
                        name="username" id="username" required onChange={(event) => handleInput(event)}
                    />
                    <label htmlFor="username">Username</label>
                </div>
                <div className="input-grp">
                    <input type="text" aria-label="phone-number"
                    autoComplete="tel-country-code"
                        autoComplete="phone-number" name="phone_number" value={data.phone_number}
                        id="phone-number" required onChange={(event) => handleInput(event)}
                    />
                    <label htmlFor="phone-number">Phone number</label>
                </div>
                <div className="input-grp">
                    <input type="password"
                        aria-label="Password" autoComplete="password" value={data.password}
                        id="password" name="password" required onChange={(event) => handleInput(event)}
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="input-grp">
                    <input type="password"
                        aria-label="admin code" autoComplete="admin_code" value={data.admin_code}
                        id="admin_code" name="admin_code" required onChange={(event) => handleInput(event)}
                    />
                    <label htmlFor="">Admin Code</label>
                </div>

                <div className="input-grp">
                    <button className="btn-primary signup-btn">
                        Sign Up
                        </button>
                </div>

            </form>

        </div>
    );
}

export default SignUp;
