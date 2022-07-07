import { useState } from 'react';
import './App.css';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Logged from './Pages/Logged';

function App() {
  const [signUp,setSignUp] = useState(true);
  const [signIn,setSignIn] = useState(false);
  const [logged,setLogged] = useState(false);

  const [data,setData] = useState('');

  let fromSignUptoIn = ()=>{
    setSignIn(true);
    setSignUp(false);
    setLogged(false);
  }

  let fromSignIntoUp = ()=>{
    setSignIn(false);
    setSignUp(true);
    setLogged(false);
  }

  let loggedin = (username)=>{
    setSignIn(false);
    setSignUp(false);
    setLogged(true);
    setData(username);
  }

  return (
    <div className="App">
        {signUp && <SignUp signIn={fromSignUptoIn} />}
        {signIn && <SignIn loggedIn={loggedin} signUp={fromSignIntoUp} />}
        {logged && <Logged username={data} />}
    </div>
  );
}

export default App;
