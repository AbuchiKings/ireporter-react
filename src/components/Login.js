import React from 'react';

function Login() {
    return (
        <div className="login-center">

            <form className="login-form">
                <div className="input-grp">
                    <input type="email"
                        aria-label="email" autoComplete="email"
                        name="email" id="email" required
                    />
                    <label htmlFor="email">Email</label>

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
                        Sign In
                    </button>

                </div>
            </form>
        </div>
    )
}

export default Login
