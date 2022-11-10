import React from 'react';

const AddServices = () => {
    const HandleSubmit=event=>{
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const photoUrl= form.photoUrl.value;
        const description=form.description.value;

        const update ={
            name,
            photoUrl,
            description
        }
        fetch('https://assaingment-eleven-server-nhn1998.vercel.app/addServices',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(update)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            form.reset()
            if(data.acknowledged){
                alert('successfully added services')
            }
        })
    }
    return (
        <div>
            <form onSubmit={HandleSubmit} className='mt-10'>
            <input type="text" name='name' placeholder="Type here" className="input w-full max-w-xs mb-10 ml-10" /><br />
            <input type="text" name='photoUrl' placeholder="photo Url" className="input  w-full max-w-xs mb-10 ml-10" /> <br />
            <input type="text" name='description' placeholder="description" className="input w-full max-w-xs mb-3 ml-10" /> <br />
            <input className='btn ml-10' type="submit" value="upload" />

            </form>
        </div>
    );
};

export default AddServices;