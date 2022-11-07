import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?3&w=826&t=st=1667856524~exp=1667857124~hmac=c8fa3bc199f2c32a8e1fa6bc07cfe2cdbf07db952bdf4cf63fcc1abfca383d14")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there {user?.displayName}</h1>
                    <p className="mb-5">Welcome to paradise Travel. You can check out all your favourite destination. </p>

                </div>
            </div>
        </div>
    );
};

export default Home;