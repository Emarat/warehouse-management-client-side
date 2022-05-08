import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container'>
            <>
                <h3 className='text-center mt-3'> Q&A </h3>
                <div className='mt-4'>
                    <Card>
                        <Card.Header>1. Difference between javascript and nodejs.</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>{' '}
                                    JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use. {' '}
                                </p>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
                <div className='mt-4'>
                    <Card>
                        <Card.Header>2 When should you use nodejs and when should you use mongodb?</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    The summary is MongoDB is a database where we can store data and NodeJS helps us to to connect our client site to database by it's server site. {' '}

                                </p>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
                <div className='mt-4'>
                    <Card>
                        <Card.Header>3 Differences between sql and nosql databases.</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.{' '}

                                </p>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
                <div className='mt-4'>
                    <Card>
                        <Card.Header>4 What is the purpose of jwt and how does it work?</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.{' '}

                                </p>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
            </>
        </div>
    );
};

export default Blog;