import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
    const { _id, name, quantity, supplier, image, description, price } = item;

    const navigate = useNavigate();
    const navigateToInventoryPage = (_id) => {
        navigate(`/inventory/${_id}`)
    }
    return (
        <>
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
                    <button onClick={() => navigateToInventoryPage(_id)} type="button" className="btn btn-primary">UPDATE</button>
                </Card.Body>
            </Card>

        </>
    );
};

export default Item;