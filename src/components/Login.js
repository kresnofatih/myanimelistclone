import React from 'react'

function Login({email, 
                password, 
                setEmail, 
                setPassword, 
                handleLogin, 
                handleSignup,
                hasAccount,
                setHasAccount,
                emailErrorMsg,
                passwordErrorMsg
            }) {
    return (
        <div className="loginComponent">
            <div className="loginContainer">
                <p className="usernameLabel">Username</p>
                <input
                    type='text'
                    autoFocus
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <p className="emailErrorMsg">{emailErrorMsg}</p>
                <p className="passwordLabel">Password</p>
                <input
                    type='password'
                    required
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <p className="passwordErrorMsg">{passwordErrorMsg}</p>
                {hasAccount ? (
                    <div className="btnContainer">
                        <button onClick={handleLogin}>Sign In</button>
                        <p>Don't have an account? <span onClick={()=>setHasAccount(!hasAccount)}>sign up</span></p>
                    </div>
                ) : (
                    <div className="btnContainer">
                        <button onClick={handleSignup}>Sign Up</button>
                        <p>Already have an account? <span onClick={()=>setHasAccount(!hasAccount)}>sign in</span></p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Login
