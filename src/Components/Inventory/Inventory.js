import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { inventoryId } = useParams();
    const [item, setItem] = useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/fruit/${inventoryId}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])



    return (
        <div className='container mt-5'>
            <div className="card mb-3">
                <Image style={{ width: '200px' }} className="card-img-top" src={item.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <br />
                    <p>Description: <small>{item.description}</small> </p>
                    <p>Supplier: <small>{item.supplier}</small> </p>
                    <p>Quantity: <small>{item.quantity}</small> </p>
                    <p>Price: <small>{item.price}</small> </p>
                    <div className='text-center'>
                        <button type="button" className="btn btn-primary">DELIVERED</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;