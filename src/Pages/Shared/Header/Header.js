import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';
import Logo from '../../../logo2.png';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt="" />
                    Learning Computer
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Courses" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Basic Computer</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Microsoft Office
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Web Development</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Graphic Design</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Programming Languages</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">Video Editing</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/faq">FAQ</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="#deets">Light</Nav.Link>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }


                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;