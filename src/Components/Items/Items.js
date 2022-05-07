import React, { useEffect, useState } from 'react';
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
            <h2 id='services' className='text-center mt-5'>ITEMS</h2>
            <div className='row'>
                {
                    items.slice(0, 6).map(item => <Item
                        key={item._id}
                        item={item}
                    >

                    </Item>)
                }
            </div>
        </div>
    );
};

export default Items;