import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const UpdateReview = () => {
    const reviews = useLoaderData();
    console.log(reviews)
    const { user } = useContext(AuthContext);
    console.log(user);
    const [review, setReview] = useState(reviews)
    const handelUpdate = event => {
        event.preventDefault();
        console.log(event)
        fetch(`https://paradice-travel-server-sourov101.vercel.app/updateReview/${reviews._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    notify();
                    event.target.reset();
                }

            })


    }


    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review }
        newReview[field] = value;
        setReview(newReview);



    }

    function notify() {
        toast.success('Review Updated successfully!!!');
    };

    return (
        <div>
            <h1 className='text-3xl mt-5 font-semibold'>Edit Your review</h1>

            <form onSubmit={handelUpdate} className='my-20' >

                <input name="email" type="email" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered mb-4" readOnly />
                {/* review area */}

                <input onChange={handleInputChange} name="rating" defaultValue={reviews?.rating} className="textarea textarea-bordered w-full mb-4" placeholder="Your service rating " required></input>
                <textarea onChange={handleInputChange} name="review" defaultValue={reviews?.review} className="textarea textarea-bordered h-24 w-full" placeholder="Your service review " required></textarea>


                <input className='btn my-10' type="submit" value="Update Review" />
                <Toaster />

            </form>
        </div>
    );
};

export default UpdateReview;