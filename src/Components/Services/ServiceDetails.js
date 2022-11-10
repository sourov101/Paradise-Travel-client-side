import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Review from '../Review/Review';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



const ServiceDetails = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    console.log(reviews)
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))


    }, [])

    if (!user) {

    }


    return (
        <PhotoProvider>
            <div>

                <div className="card card-compact w-100 bg-base-100 shadow-xl m-20 ">
                    <figure><PhotoView src={service.img} ><img src={service.img} alt="" /></PhotoView></figure>
                    <div className="card-body">
                        <h2 className="card-title">Title: {service.title}</h2>
                        <p className='text-xl'> {service.description}</p>
                        <p className='text-2xl font-semibold'>Price: ${service.price}</p>
                        <div className="card-actions justify-end">


                            <Link to={`/addReview/${service._id}`}><button className="btn btn-primary">Add Review</button></Link>




                        </div>
                        <div>
                            {
                                !user && !user?.uid ? <h1 className='text-3xl mt-5 font-semibold'>Please Login to Add Review</h1> : <></>
                            }

                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='text-3xl mt-5 font-semibold mb-4'>Reviews</h1>

                    {Array.isArray(reviews)
                        ?
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                            service={service}
                        ></Review>) : null
                    }

                </div>
            </div>
        </PhotoProvider >
    );
};

export default ServiceDetails;