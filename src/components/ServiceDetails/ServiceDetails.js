import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const services = useLoaderData();
    const {name,description,img,rating,price}=services;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-32">
            <figure><img className='w-full h-full' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className='font-semibold'>price:{price}</div>
                <div className="card-actions">
                <div className='flex'>{rating}<FaStarHalfAlt></FaStarHalfAlt></div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;