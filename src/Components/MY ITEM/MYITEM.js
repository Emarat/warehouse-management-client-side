import React, { useEffect, useState } from 'react';
import MyItems from '../MyItems/MyItems';

const MYITEM = () => {
    const [myitems, setMyItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/fruit')
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [])
    return (
        <div className='container'>
            <h5 className='text-center mt-3'>Recently Added Items</h5>
            <div className='row'>
                {
                    myitems.filter(myitem => myitem.email).map(myitem => <MyItems
                        key={myitem._id}
                        myitem={myitem}
                    ></MyItems>)
                }
            </div>
        </div>
    );
};

export default MYITEM;