import React, { } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const ManageInventories = ({ inventory }) => {
    const { _id, name, quantity, supplier, image, description, price } = inventory;

    // console.log(item);

    const deleteItem = (id) => {
        const proceed = window.confirm('Are You Sure You Want To Delete?')
        if (proceed) {
            console.log('Deleting with Id', _id);
            const url = `https://enigmatic-plateau-73534.herokuapp.com/fruit/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log('Deleted');
                })
        }
        window.location.reload(false);
    };

    return (
        <Card className='mt-4 ms-5' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Description: {description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Supplier: {supplier}</ListGroupItem>
                <ListGroupItem>Price: {price}</ListGroupItem>
                <ListGroupItem>Qty: {quantity}</ListGroupItem>
            </ListGroup>
            <Card.Body className='text-center'>
                <button onClick={() => deleteItem(_id)} type="button" className="btn btn-primary">DELETE</button>
            </Card.Body>
        </Card>
    );
};

export default ManageInventories;