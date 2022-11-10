import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import signupimg from '../assets/images/signupimg.jpg'
import { AuthContext } from '../context/AuthProvider';

const Signup = () => {
    const { createUser, profile, loading } = useContext(AuthContext);
    const handelSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        // console.log(email, password, name, photo)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                profile(name, photo)
                console.log(user);
                form.reset();


            })
            .catch(err => console.error(err));


    }

    if (loading) {
        return <div className="radial-progress" style={{ "--value": 100 }}>100%</div>
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Paradise Travel: Signup</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={signupimg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handelSignup} className="card-body">
                        <h1 className='text-3xl'>Signup Now</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered" />
                        </div>
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
                                <p>Already have an account? <Link to='/login'>Login now</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;