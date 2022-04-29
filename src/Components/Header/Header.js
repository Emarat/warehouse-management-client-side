import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/nav-icon.png';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    FRUITS WAREHOUSE
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar>
                        <Nav.Link>LOGIN</Nav.Link>
                    </Navbar>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;