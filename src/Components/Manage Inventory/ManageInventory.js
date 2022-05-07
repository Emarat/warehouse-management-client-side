import React, { useEffect, useState } from 'react';
import ManageInventories from '../Manage Inventories/ManageInventories';

const ManageInventory = () => {
    const [inventories, setInventory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/fruit')
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
    return (
        <div className='container'>
            <h2 id='services' className='text-center mt-5'>MANAGE INVENTORIES</h2>
            <div className='row'>
                {
                    inventories.map(inventory => <ManageInventories
                        key={inventory._id}
                        inventory={inventory}
                    >

                    </ManageInventories>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;