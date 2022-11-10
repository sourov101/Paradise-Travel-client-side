import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

const AddService = () => {
    const { user } = useContext(AuthContext);

    const handlesService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const name = user?.displayName || 'unregistered';
        const description = form.description.value;
        const img = form.image.value;
        const price = form.price.value;


        const services = {

            title,
            img,
            description,
            price,

            user:
                name
        }
        console.log(services)
        fetch('https://paradice-travel-server-sourov101.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
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
        toast.success('Service added successfully!!!');
    };
    return (
        <div>
            <Helmet>
                <title>Paradise Travel: Add services</title>
            </Helmet>
            <h1 className='text-3xl mt-5 font-semibold'>Add your service here:</h1>

            <form className='my-20' onSubmit={handlesService}>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="title" type="text" placeholder="title" className="input input-ghost w-full  input-bordered" />
                    <input name="image" type="text" placeholder="image" className="input input-ghost w-full  input-bordered" />
                    <input name="price" type="text" placeholder="price" className="input input-ghost w-full  input-bordered" />

                    <input name="name" type="text" placeholder="Your name" defaultValue={user?.displayName} className="input input-ghost w-full  input-bordered mb-4" readOnly />
                </div>
                <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="Your service description" required></textarea>

                <input className='btn mb-10' type="submit" value="Add Service" />

                <Toaster />
            </form>
        </div>
    );
};

export default AddService;