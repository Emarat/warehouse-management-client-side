import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            {
                items.map(item => <Item
                    key={item.id}
                    item={item}
                >

                </Item>)
            }
        </div>
    );
};

export default Items;