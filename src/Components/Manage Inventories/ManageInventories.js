import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const ManageInventories = ({ inventory }) => {
    const { name, quantity, supplier, image, description, price } = inventory;
    // console.log(item);



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
                <button type="button" className="btn btn-primary">DELETE</button>
            </Card.Body>
        </Card>
    );
};

export default ManageInventories;