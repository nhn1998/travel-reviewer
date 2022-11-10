import React from 'react';

const MyReviewList = ({revie}) => {
    // console.log(revie)
    const HandleDelete=id=>{
        const agree=window.confirm('Do you want to delete this item?')
        if(agree){
            console.log('deleting this',id)
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-5">
  <div className="card-body">
    <div>
        <div className="text-xl">{revie.serviceName}</div>
      </div>
    <div className="card-actions justify-end">
        
      <div>
      <button onClick={()=>HandleDelete(revie._id)} className="btn btn-square btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      <button className='btn btn-ghost'>Edit</button>
      </div>
      
    </div>
    <p>{revie.Review}</p>
  </div>
</div>
    );
};

export default MyReviewList;