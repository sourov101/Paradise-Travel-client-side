import React from 'react';

const MyReviewsTable = ({ user, review }) => {
    return (
        <div>
            {
                user?.email === review?.email ?
                    <div className="overflow-x-auto w-full my-10">
                        <table className="table table-zebra w-full">

                            <thead>
                                <tr>

                                    <th>Name</th>
                                    <th>Review</th>
                                    <th>Rating</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={review.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{review.name}</div>
                                                <div className="text-sm opacity-50">{review.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {review.review}
                                    </td>
                                    <td>
                                        {review.rating}
                                    </td>

                                </tr>
                            </tbody>
                            <tfoot>

                            </tfoot>
                        </table>
                    </div>
                    :
                    <div className='text-3xl mt-5 font-semibold mb-4 align-center'>No reviews were added</div>
            }
        </div>
    );
};

export default MyReviewsTable;