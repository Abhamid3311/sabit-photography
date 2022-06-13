import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    return (

        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home#banner">Dream-Photography</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link href="/home#service">Services</Nav.Link>
                        <Nav.Link href='/home#review'>Reviews</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        <Nav.Link as={Link} to='/blog'>Blogs</Nav.Link>
                        <Nav.Link as={Link} to='/gallery'>Gallery</Nav.Link>
                    </Nav>
                    <Nav>

                        {user
                            ? <>
                                <button className='btn btn-primary' onClick={() => signOut(auth)}>Sign Out</button>

                                <Nav.Link as={Link} to='/checkout'>Checkout</Nav.Link>
                            </>
                            :
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;