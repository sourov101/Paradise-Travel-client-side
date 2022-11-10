

import { Link } from 'react-router-dom';


const ServiceCard = ({ service }) => {

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-20 ">

            <figure><img src={service.img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Title: {service.title}</h2>
                <p className='text-xl'>

                    {
                        service.description.length > 100 ? `${service.description.substring(0, 100)}...` : service.description

                    }
                </p>
                <p className='text-2xl font-semibold'>Price: ${service.price}</p>
                <div className="card-actions justify-end">

                    <Link to={`/serviceDetails/${service._id}`}><button className="btn btn-primary">Details</button></Link>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;