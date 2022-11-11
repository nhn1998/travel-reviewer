import React, { useState } from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const AnotherServices = ({ service }) => {
  const { name, img, description, rating, price, _id } = service || {};
  console.log(img)


  return (
    <PhotoProvider>
      <div className="card w-96 bg-base-100 shadow-xl mt-20 mx-auto">
        <figure>

          <PhotoView src={img}>
            <img src={img} alt="" />
          </PhotoView>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description.slice(0, 200)}</p>
          <div className='flex justify-between'>
            <p className='font-bold'>Price: {price}</p>
            <div className='flex'>{rating}<FaStarHalfAlt></FaStarHalfAlt></div>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default AnotherServices;