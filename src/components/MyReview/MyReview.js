import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { authContext } from '../AuthProvider/AuthProvider';
import MyReviewList from './MyReviewList';

const MyReview = () => {
    const {user}=useContext(authContext)
    const [reviews,setReviews]=useState([])
    // console.log(reviews)
    useTitle('review')
    useEffect(()=>{
        fetch(`https://assaingment-eleven-server-nhn1998.vercel.app/users/myReviews?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })
        .catch(err=>console.log(err))
    },[user?.email])
    const HandleDelete = id => {
        const agree = window.confirm('Do you want to delete this item?')
        if (agree) {
            // console.log('deleting this',id)
            fetch(`https://assaingment-eleven-server-nhn1998.vercel.app/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                        alert('review deleted successfully')
                        const remaining = reviews.filter(riv=>riv._id!==id)
                        setReviews(remaining)
                    }
                })
        }
    }
    return (
        <div>
            You have total {reviews.length}
            <div>
                {
                    reviews.map(revie=><MyReviewList key={revie._id} revie={revie} HandleDelete={HandleDelete}></MyReviewList>)
                }
            </div>
        </div>
    );
};

export default MyReview;