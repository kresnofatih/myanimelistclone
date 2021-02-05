import React from 'react'
import './Login.css'

function Login({email, 
                password, 
                setEmail, 
                setPassword, 
                handleLogin, 
                handleSignup,
                hasAccount,
                setHasAccount,
                emailErrorMsg,
                passwordErrorMsg,
                userName,
                setUserName,
                photoUrl,
                setPhotoUrl
            }) {
    return (
        <div className="loginComponent">
            <div className="loginContainer">
                {hasAccount ? (
                    <div className="loginbox">
                        <p className="emailLabel">Email</p>
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
                        <div className="btnContainer">
                            <button onClick={handleLogin}>Sign In</button>
                            <p>Don't have an account? <span onClick={()=>setHasAccount(!hasAccount)}>sign up</span></p>
                        </div>
                    </div>
                ) : (
                    <div className="loginbox">
                        <p className="userNameLabel">UserName</p>
                        <input
                            type='text'
                            required
                            value={userName}
                            onChange={(e)=>setUserName(e.target.value)}
                        />
                        <p className="emailLabel">Email</p>
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
                        <p className="photoUrlLabel">Photo URL</p>
                        <input
                            type='text'
                            required
                            value={photoUrl}
                            onChange={(e)=>setPhotoUrl(e.target.value)}
                        />
                        <div className="btnContainer">
                            <button onClick={handleSignup}>Sign Up</button>
                            <p>Already have an account? <span onClick={()=>setHasAccount(!hasAccount)}>sign in</span></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Login
