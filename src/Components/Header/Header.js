import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/nav-icon.png';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="home#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand as={Link} to="home#home">
                        FRUITS WAREHOUSE
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link as={Link} to="home#home">HOME</Nav.Link>
                            <Nav.Link as={Link} to="/blog">BLOGS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            {
                                user ?
                                    <Nav>
                                        <Nav.Link as={Link} to="/AddInventoryItem">ADD ITEM</Nav.Link>
                                        <Nav.Link as={Link} to="/myitem">MY ITEM</Nav.Link>
                                        <Nav.Link as={Link} to="/manageinventories">MANAGE ITEM</Nav.Link>
                                        <button onClick={handleSignOut} className="btn btn-outline-light btn-lg">LOGOUT</button>
                                    </Nav>
                                    :
                                    <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;