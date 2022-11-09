import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Services from '../Services/Services';
import image1 from './img1.jpg'
import image2 from './img2.jpg'
import image3 from './img3.jpg'
import image4 from './img4.jpg'
const Home = () => {
    const services = useLoaderData();
    console.log(services)
    return (
        <div>
            <div className="carousel w-full h-96 mt-20 rounded-2xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={image1} className="w-full" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <img src={image2} className="w-full" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <img src={image3} className="w-full" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <img src={image4} className="w-full" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map(service =><Services key={service._id} service={service}></Services>)
            }
        </div>
        <div>
        <Link className='grid justify-center' to='/services'><button className="btn btn-outline mt-10 ">See All</button></Link>
        </div>
        </div>
    );
};

export default Home;