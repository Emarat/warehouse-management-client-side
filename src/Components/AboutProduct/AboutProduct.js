import React from 'react';
import { Card } from 'react-bootstrap';
import img from '../../images/products.png';

const AboutProduct = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-5'>We Grow Best Food</h2>
            <div className='d-flex'>
                <div >
                    <img style={{ width: '275px' }} src={img} alt="" />
                </div>
                <div className='mt-5' >
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                Growing food was the first activity that gave us enough prosperity to stay in one place, form complex social groups, tell our stories, and build our cities.” ― Barbara Kingsolver
                                {' '}
                            </p>
                            <p>
                                {' '}
                                You are also far less likely to waste food when you have nurtured it from a seed into a plant.” — Darina Allen
                                {' '}
                            </p>
                        </blockquote>
                    </Card.Body>
                </div>
            </div>
        </div>
    );
};

export default AboutProduct;