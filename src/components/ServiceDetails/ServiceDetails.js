import React, { useContext, useEffect, useState } from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { authContext } from '../AuthProvider/AuthProvider';
import ReviewList from '../ReviewList/ReviewList';

const ServiceDetails = ({children}) => {
    const services = useLoaderData();
    console.log(services)
    const { user } = useContext(authContext)
    const [reviews, setReviews] = useState([])
    const navigate=useNavigate()
    useTitle('review')
    // console.log(reviews)
    useEffect(()=>{
        fetch(`https://assaingment-eleven-server-nhn1998.vercel.app/users?servicesId=${services._id}`)
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
            
        })
        .catch(err=>console.log(err))
    },[services?._id])
    const { name, description, img, rating, price } = services;
    const HandleUser = event => {
        event.preventDefault();
        const form = event.target;
        const Area = form.text.value;
        const name = user?.displayName;
        const unique = services?._id;
        const photoURL=user?.photoURL;
        const email = user?.email;
        const serviceName = services.name;

        const review = {
            Review: Area,
            name,
            servicesId:unique,
            photoURL,
            email,
            serviceName
        }
        fetch('https://assaingment-eleven-server-nhn1998.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('user added successfully.Please do refresh')
                }
                form.reset()
            })
            .catch(err => console.log(err))

            
    }
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
                <h1 className='text-2xl ml-20'>this service has {reviews.length} reviews</h1>
                <form onSubmit={HandleUser}>
                    <textarea name='text' className="textarea textarea-primary w-1/2 p-10 border mt-5 ml-20" placeholder="Your review" required></textarea>
                    <div>
                        {
                            user?.email?<button className='btn ml-20'>Submit</button>:
                            <>
                            <h2 className='text-xl text-red-900 ml-20'>Please Login first to give a review <Link className='text-blue-600' to='/login'>Login</Link></h2>
                            <button className='btn btn-disabled ml-20'>Submit</button>
                            </>
                        }
                    </div>
                    <div className='ml-10'>
                        
                        {
                            reviews.map(revie=><ReviewList key={revie._id} revie={revie}></ReviewList>)
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;