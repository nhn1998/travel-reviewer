import React, { useState } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
const Services = ({service}) => {
    const {name,img,description,price,rating,_id}=service;
    const [images,setImages]=useState([{img}])
    console.log(images)
    return (
        <PhotoProvider>
            <div className="card w-96 bg-base-100 shadow-xl mt-32 mx-auto">
  <figure><div className="foo">
        {images.map((item, index) => (
          <PhotoView key={index} src={img}>
            <img src={img} alt="" />
          </PhotoView>
        ))}
      </div></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description.slice(0,100)}...</p>
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

export default Services;