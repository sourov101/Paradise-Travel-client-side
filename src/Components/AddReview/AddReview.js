import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const AddReview = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();

    const handlesService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const name = user?.displayName || 'unregistered';
        const id = form.id.value;
        const email = form.email.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const review = form.review.value;
        const rating = form.rating.value;
        const date = form.date.value;


        const reviews = {

            title,
            id,
            price,

            photo,
            name,
            email,

            review,
            rating,
            date
        }


        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.acknowledged) {
                    notify();
                    form.reset();
                }
            })
            .catch(err => console.log(err))


    }

    function notify() {
        toast.success('Review added successfully!!!');
    };

    return (
        <div>
            <h1 className='text-3xl mt-5 font-semibold'>Add your review here:</h1>
            <form className='my-20' onSubmit={handlesService}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    {/* service info */}
                    <input name="title" defaultValue={service.title} type="text" placeholder="title" className="input input-ghost w-full  input-bordered" readOnly />
                    <input name="id" defaultValue={service?._id} type="text" placeholder="id" className="input input-ghost w-full  input-bordered" readOnly />
                    <input name="price" defaultValue={service?.price} type="text" placeholder="price" className="input input-ghost w-full  input-bordered" readOnly />

                    {/* user info */}
                    <input name="name" type="text" placeholder="Your name" defaultValue={user?.displayName} className="input input-ghost w-full  input-bordered mb-4" readOnly />

                    <input name="photo" type="text" placeholder="Your photo" defaultValue={user?.photoURL} className="input input-ghost w-full  input-bordered mb-4" readOnly />
                    <input name="date" type="date" placeholder="" className="input input-ghost w-full  input-bordered mb-4" required />
                </div>
                <input name="email" type="email" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered mb-4" readOnly />
                {/* review area */}

                <input name="rating" className="textarea textarea-bordered w-full mb-4" placeholder="Your service rating " required></input>
                <textarea name="review" className="textarea textarea-bordered h-24 w-full" placeholder="Your service review " required></textarea>


                <input className='btn my-10' type="submit" value="Add Review" />
                <Toaster />

            </form>
        </div>
    );
};

export default AddReview;