import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import Logo from "./logo_transparent.png";
// import Landing from './Landing';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/landing') // direct it to Dashboard
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/landing')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to="/">
                <img className="login__logo" src={Logo} alt=""/> 
            </Link>


            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5><strong>E-mail</strong></h5> 
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5><strong>Password</strong></h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the PSBMS Conditions of Use. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Account</button>
            </div>
        </div>
    )
}

export default Login