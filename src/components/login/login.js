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
      <video id='video' src={videoBg} autoPlay muted loop />
      <div className='form-input'>
        <form className='login-form'>
          <div className="form-control">
            <input ref={emailRef} type='text' required />
            <label>
              <span style={{ transitionDelay: '0ms' }}>E</span><span style={{ transitionDelay: '50ms' }}>m</span><span style={{ transitionDelay: '100ms' }}>a</span><span style={{ transitionDelay: '150ms' }}>i</span><span style={{ transitionDelay: '200ms' }}>l</span>
            </label>
          </div>
          <div className="form-control">
            <input ref={passwordRef} type='password' required />
            <label>
              <span style={{ transitionDelay: '0ms' }}>P</span><span style={{ transitionDelay: '50ms' }}>a</span><span style={{ transitionDelay: '100ms' }}>s</span><span style={{ transitionDelay: '150ms' }}>s</span><span style={{ transitionDelay: '200ms' }}>w</span><span style={{ transitionDelay: '250ms' }}>o</span><span style={{ transitionDelay: '300ms' }}>r</span><span style={{ transitionDelay: '350ms' }}>d</span>
            </label>
          </div>
          <div className='div-btn'>
            <button  className='btn' type="button" onClick={signIn}>Login</button>
            <button  className='btn' type="button" onClick={register}>Register</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
