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
                setPhotoUrl,
                setCreatedAccount
            }) {
    return (
        <div className="loginComponent">
            <div className="loginillustration">
                <h1 className="webtitle">malc.</h1>
                <h1 className="webslogan">the best anime <br/>community</h1>
            </div>
            <div className="loginContainer">
                {hasAccount ? (
                    <div className="loginbox">
                        <div className="loginboxtitle">
                            <h3 className="logintitle">Log In</h3>
                            <p className="loginslogan">enter the community now!</p>
                        </div>
                        <input
                            type='text'
                            autoFocus
                            required
                            placeholder="Email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                        <p className="emailErrorMsg errormsglabel">{emailErrorMsg}</p>
                        <input
                            type='password'
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <p className="passwordErrorMsg errormsglabel">{passwordErrorMsg}</p>
                        <div className="btnContainer">
                            <button onClick={handleLogin}>Log In</button>
                            <p>Don't have an account? <span onClick={()=>{
                                    setHasAccount(!hasAccount);
                                    setCreatedAccount(false);
                                }}>sign up</span></p>
                        </div>
                    </div>
                ) : (
                    <div className="loginbox">
                        <div className="loginboxtitle">
                            <h3 className="logintitle">Sign Up</h3>
                            <p className="loginslogan">join the community now!</p>
                        </div>
                        <input
                            type='text'
                            placeholder="Username"
                            autoFocus
                            required
                            value={userName}
                            onChange={(e)=>setUserName(e.target.value)}
                            />
                        <input
                            type='text'
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                        <p className="emailErrorMsg errormsglabel">{emailErrorMsg}</p>
                        <input
                            type='password'
                            required
                            placeholder="Password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                        <p className="passwordErrorMsg errormsglabel">{passwordErrorMsg}</p>
                        <input
                            type='text'
                            required
                            placeholder="Photo URL"
                            value={photoUrl}
                            onChange={(e)=>setPhotoUrl(e.target.value)}
                        />
                        <div className="btnContainer">
                            <button onClick={handleSignup}>Create Account</button>
                            <p>Already have an account?  <span onClick={()=>setHasAccount(!hasAccount)}>sign in</span></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Login
