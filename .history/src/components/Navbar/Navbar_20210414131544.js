
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import Home from '../Home';

const customNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/home">FunSpinning</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            {/* add as -> set a custom element for this component */}
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
            <Nav.Link eventKey="/home">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <NavDropdown title="Blog" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/sport">Sport</NavDropdown.Item>
                    <NavDropdown.Item href="/spinning">Spinning class</NavDropdown.Item>
                    <NavDropdown.Item href="/nutrition">Nutrition</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="/sign-up">Sign up</Nav.Link>
                <Nav.Link href="/sign-in">Sign in</Nav.Link>
                </Nav>
        
                
</Navbar.Collapse>
        </Navbar>
    )
}

export default customNavbar;