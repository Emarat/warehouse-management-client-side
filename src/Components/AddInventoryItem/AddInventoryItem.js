import React from 'react';
import { useForm } from "react-hook-form";

const AddInventoryItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/fruit`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-center mt-4'>ADD NEW ITEM</h3>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Supplier' {...register("supplier", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Photo Url' type="text" {...register("image")} />
                <input className='mb-2' placeholder='Email' type="text" {...register("email")} />
                <input type="submit" value="ADD ITEM" />
            </form>
        </div>
    );
};

export default AddInventoryItem;