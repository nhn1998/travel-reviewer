import React, { useContext } from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const services = useLoaderData();
    const {user}=useContext(authContext)
    console.log(user)
    const {name,description,img,rating,price}=services;
    return (
        <div>
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
        <div className='mt-20'>
            <div className="text-4xl">Here you can add your review</div>
            <form>
            <textarea placeholder='your review' className='w-full p-10 border mt-5'></textarea>
            <button className='btn'>Submit</button>
            </form>
        </div>
        </div>
    );
};

export default ServiceDetails;