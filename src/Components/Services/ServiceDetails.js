import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';



const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service)


    const [reviews, setReviews] = useState([]);
    console.log(reviews)
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))


    }, [])

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
                <h1 className='text-3xl mt-5 font-semibold'>Reviews</h1>

                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                        service={service}
                    ></Review>)
                }

            </div>
        </div>
    );
};

export default ServiceDetails;