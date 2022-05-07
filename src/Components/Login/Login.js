import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading1, gError] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/inventory';

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }

    if (gUser) {
        navigate(from, { replace: true });
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const resetPassword = async () => {
        await sendPasswordResetEmail(email);
        toast("Sent Email");

    }

    const handleUserSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <form onSubmit={handleUserSignIn}>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white">
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-3 text-uppercase">Login</h2>

                                        <div className="form-outline form-white mb-4">
                                            <input onBlur={handleEmailBlur} type="email" id="typeEmailX" placeholder='Enter Your Email' className="form-control form-control-lg" required />
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input onBlur={handlePasswordBlur} type="password" id="typePasswordX" placeholder='Enter Your Password' className="form-control form-control-lg" required />
                                        </div>

                                        <p className="small mb-3 pb-lg-2"><a onClick={resetPassword} className="text-white-50 text-decoration-none" href="#!">Forgot password?</a></p>
                                        <p style={{ color: 'red' }}>{error?.message}</p>
                                        {
                                            loading && <p>Loading...</p>
                                        }
                                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                                        <ToastContainer />

                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                            <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                            <a onClick={() => signInWithGoogle()} href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                        </div>

                                    </div>

                                    <div>
                                        <p className="mb-0">Don't have an account? <Link to="/register" className="text-white-50 fw-bold text-decoration-none">Register</Link>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    );
};

export default Login;