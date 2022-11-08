import React from 'react';

const ServiceCard = ({ service }) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-20 ">
            <figure><img src={service.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <p className='text-2xl font-semibold'>description: {service.description}</p>
                <p className='text-2xl font-semibold'>price: $ {service.price}</p>
                <div className="card-actions justify-end">



                </div>
            </div>
        </div>
    );
};

export default ServiceCard;