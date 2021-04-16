
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import * as helpers from '../../helpers/linkHelpers';
import * as serviceDB from '../../services/serviceDB';
import AuthContext from '../../contexts/AuthContext';
import { useContext } from 'react';

const CustomNavbar = ({ history }) => {

    const authContext = useContext(AuthContext);
    console.log(authContext);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand
                onClick={(e) => {
                        e.preventDefault();
                        helpers.onSelectLinkHandler('/', history);
                        }}
                href="/">FunSpinning</Navbar.Brand>
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
                {!authContext.currentUser.user? 
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
                            helpers.onSelectLinkHandler('/sign-in', history)
                        }}
                        href="/sign-in">Sign in</Nav.Link>
                    </Nav>
                
                : <Nav>
                        <Nav.Link
                            onSelect={(_, e) => {
                                e.preventDefault();
                                serviceDB.signOut()
                                    .then(() => {
                                        authContext.currentUser = {};
                                        helpers.onSelectLinkHandler('/', history)
                                })
                        }}
                        href="/sign-up">
                        Sign out
                    </Nav.Link>
                    </Nav>} 
                
        
                
</Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(CustomNavbar);