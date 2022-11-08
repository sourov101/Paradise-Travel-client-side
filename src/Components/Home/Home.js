import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import OurPlan from './OurPlan';

const Home = () => {
    const { user } = useContext(AuthContext);
    const services = useLoaderData();
    console.log(services)
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?3&w=826&t=st=1667856524~exp=1667857124~hmac=c8fa3bc199f2c32a8e1fa6bc07cfe2cdbf07db952bdf4cf63fcc1abfca383d14")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there {user?.displayName}</h1>
                        <p className="mb-5">Welcome to paradise Travel. You can check out all your favourite destination. </p>

                    </div>
                </div>
            </div>


            {/* service area */}


            <div>
                <h1 className='text-4xl font-bold my-10'>Our Services</h1>

                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>


                    {
                        services.map(service =>
                            <div key={service._id} className="card card-compact w-96 bg-base-100 shadow-xl my-20 ">
                                <figure><img src={service.img} alt="" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Title: {service.title}</h2>
                                    <p className='text-xl'>

                                        {
                                            service.description.length > 100 ? `${service.description.substring(0, 100)}...` : service.description

                                        }
                                    </p>
                                    <p className='text-2xl font-semibold'>Price: ${service.price}</p>
                                    <div className="card-actions justify-end">

                                        <Link to={`/serviceDetails/${service._id}`}><button className="btn btn-primary">Details</button></Link>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                <Link to={'/services'}><button className="btn btn-primary mb-10">See More</button></Link>
            </div>


            <div>
                <h1 className='text-4xl font-bold my-10'>Our Investment Plans</h1>

                <OurPlan></OurPlan>
            </div>
        </div>
    );
};

export default Home;