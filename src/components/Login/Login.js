import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);




    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    };

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
        console.log(email, password);
    }

    const handleGoogleSignIn = e => {
        e.preventDefault();
        signInWithGoogle(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-titel'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" required />
                    </div>
                    <p style={{ color: "red" }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='forget-pass-p'>
                    New to Ema-John? <Link className='form-link' to='/register'>create an account</Link>
                </p>
                <button onClick={handleGoogleSignIn} className='google-signIn-btn'>Continue with Google</button>
            </div>

        </div>
    );
};

export default Login;