import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import MyReviewsTable from './MyReviewsTable';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const reviews = useLoaderData();

    return (
        <div>
            {
                reviews.map(review => <MyReviewsTable
                    key={review._id}
                    review={review}
                    user={user}
                ></MyReviewsTable>)
            }
        </div>
    );
};

export default MyReviews;