import React, { useState } from 'react'
import "./Login.css";
import loginimg from "../../assets/linkedinimg.png"
import { auth } from "../../firebase/firebase"
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

function Login() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();


  const loginToApp = (e) => {

    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(userAuth => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profileURL: userAuth.user.photoURL,


        }))
      }).catch(error => alert(error))



  }

  const register = () => {
    if (!name) {
      return alert("Please enter full name");
    }
    auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
          .then(() => {
            dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profilePic
            }))
          })
      }).catch(error => alert(error))

  }
  return (
    <div className='login'>
      <img src={loginimg} />
      <form onSubmit={loginToApp}>
        <input type='text' placeholder='Full name (required if registering)' value={name} onChange={e => setName(e.target.value)} />
        <input type='text' placeholder='Profile pic URL (optional)' value={profilePic} onChange={e => setProfilePic(e.target.value)} />
        <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
        <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
        <button >Sign in</button>
      </form>
      <p>Not a member? {" "} <span className='login__register' onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login