import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [Refresh, setRefresh] = React.useState(false);


    useEffect(() => {
        fetch(`http://localhost:5000/fruit/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [Refresh])

    const Delivered = () => {
        const quantity = item.quantity - 1;
        const updateQty = { quantity };
        console.log(quantity);
        const url = `http://localhost:5000/fruit/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQty)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        // window.location.reload(false);
        setRefresh(!Refresh)
    };

    const Restock = () => {
        const inputValue = parseInt(document.getElementById("input").value);
        console.log(inputValue);
        const quantity = item.quantity + inputValue;
        const updateQty = { quantity };
        console.log(quantity);
        const url = `http://localhost:5000/fruit/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQty)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        // window.location.reload(false);
        setRefresh(!Refresh)
    }

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
                    <div className='d-flex'>
                        <div>
                            <button onClick={Delivered} type="button" className="btn btn-primary">DELIVERED</button>
                        </div>
                        <div className='d-flex mx-auto'>
                            <input style={{ width: '50px' }} type="text" className="form-control" id="input" placeholder='Qty' />
                            <button onClick={Restock} type="button" className="btn btn-primary ms-3">RESTOCK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;