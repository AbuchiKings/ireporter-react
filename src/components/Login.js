import React from 'react';

function Login() {
    return (
        <div className="login-center">
            
            <form className="login-form">
                <div className="input-grp">
                    <input type="email" placeholder="Email"
                        aria-label="email" autoComplete="email"
                    />
                </div>
                <div className="input-grp">
                    <input type="password" placeholder="Password"
                        aria-label="Password" autoComplete="password"
                    />
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
