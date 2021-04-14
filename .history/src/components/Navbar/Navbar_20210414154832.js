
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {  withRouter} from 'react-router-dom';

import Home from '../Home';

const CustomNavbar = ({ history }) => {
    const onSelectHandler = (path) => {
        return history.push(path)
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
            <Navbar.Brand href="/home">FunSpinning</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            {/* add as -> set a custom element for this component */}
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link
                        onSelect={(_, e) => {
                            e.preventDefault();
                            onSelectHandler('/');
                        }}
                        href="/">Home</Nav.Link>
                    <Nav.Link
                        onSelect={(_, e) => {
                        e.preventDefault();
                        onSelectHandler('/about');
                        }}
                        href="/about">About</Nav.Link>
                    <NavDropdown title="Blog" id="collasible-nav-dropdown">
                        <NavDropdown.Item
                            onSelect={(_, e) => {
                                e.preventDefault();
                                onSelectHandler('/sport');
                            }}
                            href="/sport">Sport</NavDropdown.Item>
                        <NavDropdown.Item
                            onSelect={(_, e) => {
                                e.preventDefault();
                                onSelectHandler('/spinning-class');
                            }}
                            href="/spinning">Spinning class</NavDropdown.Item>
                        <NavDropdown.Item
                            onSelect={(_, e) => {
                                e.preventDefault();
                                onSelectHandler('/nutrition');
                            }}
                            href="/nutrition">Nutrition</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link
                        onSelect={(_, e) => {
                            e.preventDefault();
                            onSelectHandler('/sign-up')
                        }}
                        href="/sign-up">Sign up</Nav.Link>
                    <Nav.Link
                        onSelect={(_, e) => {
                            e.preventDefault();
                            onSelectHandler('/sign-in')
                        }}
                        href="/sign-in">Sign in</Nav.Link>
                </Nav>
        
                
</Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(CustomNavbar);