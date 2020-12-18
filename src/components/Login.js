import React from 'react';

function Login({ data, handleInput, handleSubmit }) {
    return (
        <div className="login-center">

            <form className="login-form" onSubmit={handleSubmit} noValidate>
                <div className="input-grp">
                    <input type="email"
                        aria-label="email" autoComplete="email" value={data.email}
                        name="email" id="email" required onChange={(event) => handleInput(event)}
                    />
                    <label htmlFor="email">Email</label>

                </div>
                <div className="input-grp">
                    <input type="password"
                        aria-label="Password" autoComplete="password" value={data.password}
                        id="password" name="password" required onChange={(event) => handleInput(event)}
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
