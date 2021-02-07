import React, {useEffect, useState} from 'react';
import fire from './Fire';
import './App.css';
import Login from './components/Login';
import Hero from './components/Hero';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailErrorMsg, setEmailErrorMsg] = useState('')
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('')
  const [hasAccount, setHasAccount] = useState(true)
  const [userName, setUserName] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')
  const [createdAccount, setCreatedAccount] = useState(false)

  const clearInputs = () => {
    setEmail('');
    setPassword('');
    setUserName('');
    setPhotoUrl('')
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
        clearInputs();
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
            break;
        };
      });
    setCreatedAccount(false);
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((authUser)=>{
        authUser.user.updateProfile({
          displayName: userName,
          photoURL: photoUrl || "https://pbs.twimg.com/profile_images/1131624264405327873/1YpVVtxD_400x400.jpg"
        });
        setHasAccount(true);
        setCreatedAccount(true);
        handleLogout();
      })
      .catch(err=>{
        clearInputs();
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailErrorMsg(err.message);
            break;
          case "auth/weak-password":
            setPasswordErrorMsg(err.message);
            break;
        };
      });
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
    setEmailErrorMsg('');
    setPasswordErrorMsg('');
  }, [hasAccount])

  return (
    <div className="App">
      <Snackbar 
        open={createdAccount} 
        autoHideDuration={3000} 
        onClose={()=>setCreatedAccount(false)}>
        <Alert 
          onClose={()=>setCreatedAccount(false)} 
          severity="success">
          Successfully Created Account!
        </Alert>
      </Snackbar>
      {user!='' ? (
        <Hero 
          user={user} 
          handleLogout={handleLogout}
        />
      ) : (
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
          userName={userName}
          setUserName={setUserName}
          photoUrl={photoUrl}
          setPhotoUrl={setPhotoUrl}
        />
      )}
    </div>
  );
}

export default App;
