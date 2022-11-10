import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import AnotherServices from './AnotherServices';

const AllServices = () => {
    const services = useLoaderData()
    useTitle('services')

    return (
        <div>
            <div className="text-4xl mt-10 text-center">Here you can see all services</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10'>
                {
                    services.map(service=><AnotherServices key={service._id} service = {service}></AnotherServices>)
                }
            </div>
        </div>
    );
};

export default AllServices;