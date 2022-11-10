import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const ReviewList = ({ revie }) => {
    const { user } = useContext(authContext)
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-10">
            <div>
                <div className='flex'>
                <img className='w-10 rounded-full flex' src={revie?.photoURL} alt="" />
                <p className='ml-3 font-bold'>{revie?.name}</p>
                </div>
                <div className="card-body">
                    <div className="card-actions justify-end">
                    </div>
                    <p>{revie.Review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewList;