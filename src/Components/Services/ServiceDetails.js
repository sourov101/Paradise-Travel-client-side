import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';



const ServiceDetails = () => {
    const service = useLoaderData();

    return (
        <div>
            <div className="card card-compact w-100 bg-base-100 shadow-xl m-20 ">
                <figure><img src={service.img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Title: {service.title}</h2>
                    <p className='text-xl'> {service.description}</p>
                    <p className='text-2xl font-semibold'>Price: ${service.price}</p>
                    <div className="card-actions justify-end">

                        <Link to={`/addReview/${service._id}`}><button className="btn btn-primary">Add Review</button></Link>

                    </div>
                </div>
            </div>

            <div>
                <h1>review section</h1>

            </div>
        </div>
    );
};

export default ServiceDetails;