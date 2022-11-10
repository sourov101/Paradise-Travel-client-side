import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = useLoaderData();
    return (
        <div>
            <Helmet>

                <title>Paradise Travel: Services</title>

            </Helmet>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard key={service._id}
                        service={service}></ServiceCard>)

                }
            </div>
        </div>
    );
};

export default Services;