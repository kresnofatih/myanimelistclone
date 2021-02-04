import React, {useEffect, useState} from 'react';
import fire from './Fire';
import './App.css';
import Login from './components/Login';
import Hero from './components/Hero';

function App() {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailErrorMsg, setEmailErrorMsg] = useState('')
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('')
  const [hasAccount, setHasAccount] = useState(false)

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailErrorMsg('');
    setPasswordErrorMsg('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err=>{
        switch(err.code){
          case "auth/invalid-email":
            setEmailErrorMsg("Invalid Email");
            break;
          case "auth/user-disabled":
            //
            break;
          case "auth/user-not-found":
            setEmailErrorMsg(err.message);
            break;
          case "auth/wrong-password":
            setPasswordErrorMsg(err.message);
        }
      })
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err=>{
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailErrorMsg(err.message);
            break;
          case "auth/weak-password":
            setPasswordErrorMsg(err.message);
            break;
        }
      })
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        clearInputs();
        setUser(user);
      } else {
        setUser('')
      }
    })
  };

  useEffect(()=>{
    authListener();
  }, [])

  return (
    <div className="App">
      <Login
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailErrorMsg={emailErrorMsg}
        passwordErrorMsg={passwordErrorMsg}
      />
      <Hero handleLogout={handleLogout}/>
    </div>
  );
}

export default App;
