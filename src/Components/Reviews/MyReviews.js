import React, { useContext, useEffect, useState, } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { Helmet } from 'react-helmet';


const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const reviews = useLoaderData();
    console.log(user?.email);
    const [displayReview, setDisplayReview] = useState(reviews);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?=${user?.email}`, {
            headers: {
                authorization: `${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data =>
                console.log(data)
            )
    }, [user?.email])



    const handelDelete = (review) => {
        const agree = window.confirm(`Are you sure you want to delete ${review?._id}`);
        if (agree) {

            fetch(`http://localhost:5000/reviews/${review._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        notify();
                        const remaining = displayReview.filter(rev => rev._id !== review._id);
                        setDisplayReview(remaining)
                    }
                    // console.log(data);
                });
        }
    }


    function notify() {
        toast.success('Deleted successfully!!!');
    };

    return (
        <div>
            <Helmet>
                <title>Paradise Travel: My Reviews</title>
            </Helmet>
            {Array.isArray(reviews)
                ?
                reviews?.length === 0 ?
                    <div className='text-3xl mt-5 font-semibold mb-4 align-center'>No reviews were added</div>
                    :
                    <></> : null
            }


            {Array.isArray(reviews)
                ?
                reviews?.map(review => <div key={review._id}>

                    {
                        user?.email === review?.email
                            ?
                            <div className="overflow-x-auto w-full my-10">
                                <table className="table table-zebra w-full">

                                    <thead>
                                        <tr>

                                            <th>Name</th>
                                            <th>Review</th>
                                            <th>Rating</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>

                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={review?.photo} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{review?.name}</div>
                                                        <div className="text-sm opacity-50">{review?.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {review?.review}
                                            </td>
                                            <td>
                                                {review?.rating}
                                            </td>
                                            <td>
                                                <Link to={`/updateReview/${review._id}`}><button className="btn btn-primary">Edit</button></Link>
                                            </td>
                                            <td>
                                                <button className="btn btn-primary" onClick={() => handelDelete(review)}>Delete</button>
                                                <Toaster />
                                            </td>

                                        </tr>
                                    </tbody>
                                    <tfoot>

                                    </tfoot>
                                </table>
                            </div>
                            :
                            <></>
                    }

                </div>

                ) : null
            }
        </div>
    );
};

export default MyReviews;