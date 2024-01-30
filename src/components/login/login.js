import React, { useRef, useState } from 'react';
import './login.css';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import videoBg from '../../assets/videos/videobg.mp4'

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <video id='video' src={videoBg} autoPlay muted loop/>
      <div >
        <form className="login-form" >
          <input className='login-input' ref={emailRef} type='text' placeholder='Email' />
          <input className='login-input' ref={passwordRef} type='password' placeholder='Password' />
          <div className='div-btn'>
            <button className='login-btn' type="button" onClick={signIn}>Login</button>
            <button className='login-btn' type="button" onClick={register}>Register</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
