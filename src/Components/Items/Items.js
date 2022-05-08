import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/fruit')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='text-center mt-5'>ITEMS</h2>
            <div className='row'>
                {
                    items.slice(0, 6).map(item => <Item
                        key={item._id}
                        item={item}
                    >

                    </Item>)
                }
            </div>
            <div className='text-center mt-3'>
                <Link to='/manageinventories' type="button" className="btn btn-primary btn-lg">MANAGE INVENTORIES</Link>
            </div>
        </div>
    );
};

export default Items;