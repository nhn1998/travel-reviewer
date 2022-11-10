import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import MyReviewList from './MyReviewList';

const MyReview = () => {
    const {user}=useContext(authContext)
    const [reviews,setReviews]=useState([])
    // console.log(reviews)
    useEffect(()=>{
        fetch(`https://assaingment-eleven-server-nhn1998.vercel.app/users/myReviews?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })
        .catch(err=>console.log(err))
    },[user?.email])
    return (
        <div>
            You have total {reviews.length}
            <div>
                {
                    reviews.map(revie=><MyReviewList key={revie._id} revie={revie}></MyReviewList>)
                }
            </div>
        </div>
    );
};

export default MyReview;