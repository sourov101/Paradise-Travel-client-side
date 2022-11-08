import React from 'react';

const OurPlan = () => {
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className="card card-compact w-96 bg-yellow-600 shadow-xl my-20 text-white">

                <div className="card-body">
                    <h2 className=" text-2xl">Gold Plan</h2>
                    <h1 className='text-5xl font-bold'>0.15%</h1>
                    <p className='text-xl font-semibold'>Hourly for 60 Days</p>

                </div>
            </div>


            <div className="card card-compact w-96 bg-yellow-600 shadow-xl my-20 text-white">
                <div className="card-body">
                    <h2 className=" text-2xl">Silver Plan</h2>
                    <h1 className='text-5xl font-bold'>0.10%</h1>
                    <p className='text-xl font-semibold'>Hourly for 60 Days</p>

                </div>

            </div>

            <div className="card card-compact w-96 bg-yellow-600 shadow-xl my-20 text-white">
                <div className="card-body">
                    <h2 className=" text-2xl">Bronze Plan</h2>
                    <h1 className='text-5xl font-bold'>0.5%</h1>
                    <p className='text-xl font-semibold'>Hourly for 60 Days</p>

                </div>
            </div>
        </div>

    );
};

export default OurPlan;