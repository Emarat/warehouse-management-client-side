import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
            <div className='text-center mt-3'>
                <Link to='/AddInventoryItem' type="button" className="btn btn-primary btn-lg">ADD NEW ITEM</Link>
            </div>
        </div>
    );
};

export default ManageInventory;