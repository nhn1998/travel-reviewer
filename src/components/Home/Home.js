import React, { useEffect, useState } from 'react';
import { FaCreditCard, FaFirefoxBrowser, FaGlobeAfrica, FaShoppingBag } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Services from '../Services/Services';
import AnotherHome from './AnotherHome';
import image1 from './img1.jpg'
import image2 from './img2.jpg'
import image3 from './img3.jpg'
import image4 from './img4.jpg'
import image5 from './img5.jpg'
const Home = () => {
    // console.log(services)
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://assaingment-eleven-server.vercel.app/service')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    useTitle('Home')
    const [addServices,setAddServices]=useState([])
    console.log(addServices)
    useEffect(()=>{
        fetch('https://assaingment-eleven-server.vercel.app/addServices')
        .then(res=>res.json())
        .then(data=>setAddServices(data))
    },[])


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
            <div className='mt-10 text-center'>
                <div className="text-4xl">Explore Your Destination</div>
            </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            {
                services?.length && services?.map(service =><Services key={service._id} service={service}></Services>)
            }
        </div>
        <div>
        <Link className='grid justify-center' to='/services'><button className="btn btn-outline mt-10 ">See All</button></Link>
        </div>
        <br /><br /><br /><br />
        <hr />
        <div>
            <div className="text-4xl mt-10">Here the added services</div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    addServices?.length && addServices.map(addservice=><AnotherHome key={addservice._id} addservice={addservice}></AnotherHome>)
                }
            </div>
        </div>
        <div className='mt-32'>
            <div className='text-3xl'>
                What we Serve
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 ml-10'>
            <div className='text-6xl font-bold'>
                Top Values <br />For You <FaFirefoxBrowser></FaFirefoxBrowser>
                <p className='text-xl'>
                    
                try a varity of benifits <br /> when using our service
                </p>
            </div>
            <div className='text-4xl'>
            <FaGlobeAfrica></FaGlobeAfrica>
                Lot Of Choices 
                <p className='text-xl'>total 400+ destination we work with</p>
            </div>
            <div className='text-4xl'>
                <FaShoppingBag></FaShoppingBag>
                Best Tour Guide
                <p className='text-xl'>Our tour guide has 15+ years experience</p>
            </div>
            <div className='text-4xl'>
                <FaCreditCard></FaCreditCard>
                Easy Booking
                <p className='text-xl'>With an easy and fast ticket purchase process</p>
            </div>
            </div>
        </div>
        <div className='mt-32 m-10 grid grid-cols-1 lg:grid-cols-2'>
            <div>
                <img className='rounded-xl' src={image5} alt="" />
            </div>
            <div className='ml-10 text-6xl'>
                With our exprience we will serve you
                <p className='text-xl mt-10'>Since we first open we alaways prirority is conviniece to provide our low prices and the easy process</p>
                <div className='grid grid-cols-3'>
                    <div className='text-3xl mt-10'>
                        15 
                        <p className='text-xl'>years of <br /> exprience</p>
                    </div>
                    <div>
                        400+
                        <p className='text-xl'>Destination</p>
                    </div>
                    <div>
                        50k+
                        <p className='text-xl'>Happy customer</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Home;