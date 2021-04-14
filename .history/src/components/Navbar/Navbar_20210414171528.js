
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import * as helpers from '../../helpers/linkHelpers';

const CustomNavbar = ({ history }) => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/home">FunSpinning</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link
                        onSelect={(_, e) => {
                            e.preventDefault();
                            helpers.onSelectLinkHandler('/', history);
                        }}
                        href="/">Home</Nav.Link>
                    <Nav.Link
                        onSelect={(_, e) => {
                        e.preventDefault();
                        helpers.onSelectLinkHandler('/about', history);
                        }}
                        href="/about">About</Nav.Link>
                    <NavDropdown title="Blog" id="collasible-nav-dropdown">
                        <NavDropdown.Item
                            onSelect={(_, e) => {
                                e.preventDefault();
                                helpers.onSelectLinkHandler('/sport', history);
                            }}
                            href="/sport">Sport</NavDropdown.Item>
                        <NavDropdown.Item
                            onSelect={(_, e) => {
                                e.preventDefault();
                                helpers.onSelectLinkHandler('/spinning-class', history);
                            }}
                            href="/spinning">Spinning class</NavDropdown.Item>
                        <NavDropdown.Item
                            onSelect={(_, e) => {
                                e.preventDefault();
                                helpers.onSelectLinkHandler('/nutrition', history);
                            }}
                            href="/nutrition">Nutrition</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link
                        onSelect={(_, e) => {
                            e.preventDefault();
                            helpers.onSelectLinkHandler('/sign-up', history)
                        }}
                        href="/sign-up">Sign up</Nav.Link>
                    <Nav.Link
                        onSelect={(_, e) => {
                            e.preventDefault();
                            helpers.onSelectHandler('/sign-in', history)
                        }}
                        href="/sign-in">Sign in</Nav.Link>
                </Nav>
        
                
</Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(CustomNavbar);