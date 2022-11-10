import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import loginimg from '../assets/images/loginimg.jpg'
import { AuthContext } from '../context/AuthProvider';
const Login = () => {
    const { logIn, signInWithGoogle, loading } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handelLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const currentUser = {
                    email: user.email
                }
                console.log(currentUser)
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        localStorage.setItem('token', data.token);

                    })

                navigate(from, { replace: true })
                form.reset();

            })
            .catch(error => console.log(error));


    }


    const handelGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                const user = res.user;
                navigate(from, { replace: true })
                console.log(user)

            })
            .catch(error => {
                console.error(error)
            })
    }

    if (loading) {
        return <div className="radial-progress" style={{ "--value": 100 }}>100%</div>
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Paradise Travel: Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={loginimg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body">
                        <h1 className='text-3xl'>Login Now</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p>Don't have an account? <Link to='/signup'>Signup now</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handelGoogleSignIn} className="btn btn-primary">Login with Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;