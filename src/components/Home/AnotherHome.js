import React from 'react';

const AnotherHome = ({addservice}) => {
   
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={addservice?.photoUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {addservice?.name}

                    </h2>
                    <p>{addservice?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default AnotherHome;