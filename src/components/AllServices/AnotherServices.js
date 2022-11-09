import React, { useState } from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const AnotherServices = ({service}) => {
    const {name,img,description,rating,price}=service;
    const [images,setImages]=useState([{img}])
    return (
        <PhotoProvider>
            <div className="card w-96 bg-base-100 shadow-xl mt-20 mx-auto">
  <figure><div className="foo">
        {images.map((item, index) => (
          <PhotoView key={index} src={img}>
            <img src={img} alt="" />
          </PhotoView>
        ))}
      </div></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className='flex justify-between'>
    <p className='font-bold'>Price: {price}</p>
    <div className='flex'>{rating}<FaStarHalfAlt></FaStarHalfAlt></div>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </PhotoProvider>
    );
};

export default AnotherServices;