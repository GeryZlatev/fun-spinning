
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const customNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">FunSpinning</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            {/* add as -> set a custom element for this component */}
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#sign-up">Sign up</Nav.Link>
                <Nav.Link href="sign-in">Sign in</Nav.Link>
                <NavDropdown title="Blog" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Sport</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Spinning class</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Nutrition</NavDropdown.Item>
                </NavDropdown>
            <Nav.Link href="blog">Blog</Nav.Link>
</Navbar.Collapse>
        </Navbar>
    )
}

export default customNavbar;