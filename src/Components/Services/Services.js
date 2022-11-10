import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import ServiceCard from './ServiceCard';

const Services = () => {
    const { loading } = useContext(AuthContext);
    const services = useLoaderData();

    if (loading) {
        return <div className="radial-progress" style={{ "--value": 100 }}>100%</div>
    }

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