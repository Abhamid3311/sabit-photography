import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, gUser] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    //Handle Input
    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    };
    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value);
    };

    if (user || gUser) {
        navigate(from, { replace: true });
    };

    //Handle Google signIn
    const handleGoogleSignIn = e => {
        e.preventDefault();
        signInWithGoogle(email, password)
    };

    //Handle Create User
    const handleCreateUsers = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('your two password did not match!');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 charecters or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    };


    return (
        <div className='mx-auto w-50 w-md-75  rounded  my-5 shadow-lg border-0'>
            <div className='px-5 py-5'>
                <h2 className='text-center my-3 text-primary fw-bold'>Sign Up</h2>

                <form onSubmit={handleCreateUsers}>
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
                            id="Password"
                            placeholder="Password" required />
                        <label for="Password">Password</label>
                    </div>

                    <div class="form-floating">
                        <input
                            onBlur={handleConfirmPasswordBlur}
                            type="password"
                            class="form-control"
                            id="cPassword"
                            placeholder="confirm Password" required />
                        <label for="cPassword">Confirm Password</label>
                    </div>

                    <p style={{ color: "red" }}>{error?.message}</p>

                    <button type="submit" className='w-100 btn btn-lg btn-primary'>Sign Up</button>
                </form>




                <p className='w-full mt-2'>
                    Already have an account? <Link className='form-link' to='/login'>Login</Link>
                </p>

                <button
                    onClick={handleGoogleSignIn}
                    className='w-100 btn btn-lg btn-warning'>Continue with Google
                </button>
            </div>

        </div>


    );
};

export default Register;