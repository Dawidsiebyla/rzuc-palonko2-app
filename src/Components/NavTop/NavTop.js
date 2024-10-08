import React from 'react';
import { Link } from "react-router-dom";
import { Container, Navbar, Nav,} from "react-bootstrap";
import "./Navtop.css"



const NavTop = () => {
    


    return (
        <div className='menu'>
        <Navbar className= "navbar" expand="lg">
            <Container className='nav-cont'>
                <Navbar.Brand href="#home" className="brand">RZUĆ PALONKO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link>
                            <Link to="/" className='link'>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/about" className='link'>About</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/cigarette" className='link'>Palisz? Kliknij</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/propose" className='link'>Twój Cel</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/cigaretteBalance" className='link'>Bilans</Link>
                        </Nav.Link>
                        
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default NavTop;