
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, FormControl } from 'react-bootstrap';

const customNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">FunSpinning</Navbar.Brand>
            {/* add  */}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#sign-up">Sign up</Nav.Link>
            <Nav.Link href="sign-in">Sign in</Nav.Link>
            <Nav.Link href="blog">Blog</Nav.Link>

        </Navbar>
    )
}

export default customNavbar;