import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, gUser] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    // get value from inputField
    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    };


    if (user || gUser) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <p>Loading...</p>
    }



    // Handle Form SignIn 
    const handleUserSignIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    };

    //Google SignIn
    const handleGoogleSignIn = e => {
        e.preventDefault();
        signInWithGoogle(email, password)
    };

    return (
        <div className='mx-auto w-50 w-md-75  rounded  my-5 shadow-lg border-0'>
            <div className='px-5 py-5'>
                <h2 className='text-center my-3 text-primary fw-bold'>Login</h2>

                <form onSubmit={handleUserSignIn}>
                    <div class="form-floating mb-3">
                        <input
                            onBlur={handleEmailBlur}
                            type="email"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com" required />
                        <label for="floatingInput">Email address</label>
                    </div>

                    <div class="form-floating">
                        <input
                            onBlur={handlePasswordBlur}
                            type="password"
                            class="form-control"
                            id="floatingPassword"
                            placeholder="Password" required />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <p style={{ color: "red" }}>{error?.message}</p>

                    <button type="submit" className='w-100 btn btn-lg btn-primary'>Login</button>
                </form>




                <p className='w-full mt-2'>
                    New to Sabit Photography? <Link className='text-warning' to='/register'>create an account</Link>
                </p>

                <p className='w-full mt-2'>
                    Forget your password? <button className='btn btn-light text-danger' onClick={async () => {
                        await sendPasswordResetEmail(email);
                        toast('Check email for reset password');
                    }}>Reset password</button>
                </p>

                <button
                    onClick={handleGoogleSignIn}
                    className='w-100 btn btn-lg btn-warning'>Continue with Google
                </button>
            </div>

        </div>
    );
};

export default Login;