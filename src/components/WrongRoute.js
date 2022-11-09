import React from 'react';
import { Link } from 'react-router-dom';

const WrongRoute = () => {
    return (
        <div>
            <div className="4xl font-bold text-blue-400">You are coming to the wrong route.Please go to the <Link className='text-black' to='/'>HomePage</Link></div>
        </div>
    );
};

export default WrongRoute;