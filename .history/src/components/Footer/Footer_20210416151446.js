import { Nav, Container, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import style from './Footer.module.css';
import * as helpers from '../../helpers/linkHelpers';

const Footer = ({history}) => {
    return (

        <Container fluid className={style["footer-container"]}>
            <Row>
                <Col>
            <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link
                onSelect={(_, e) => {
                    e.preventDefault();
                    helpers.onSelectLinkHandler('/support', history)
                }}
                href="/support">Support</Nav.Link>
            <Nav.Link
                onSelect={(_, e) => {
                    e.preventDefault();
                    helpers.onSelectLinkHandler('/contacts', history)
                }}
                href="/contacts">Contacts</Nav.Link>
            <Nav.Link
                onSelect={(_, e) => {
                    e.preventDefault();
                    helpers.onSelectLinkHandler('/sign-in', history)
                }}
                href="/account">Access Your Account</Nav.Link>
            </Nav>
                </Col>
                <Col>
            <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link
                onSelect={(_, e) => {
                    e.preventDefault();
                    helpers.onSelectLinkHandler('/about', history)
                }}
                href="/about">About Us</Nav.Link>
            <Nav.Link
                onSelect={(_, e) => {
                    e.preventDefault();
                    helpers.onSelectLinkHandler('/about-spinning', history)
                }}
                href="/about-spinning">About Spinning</Nav.Link>
            <Nav.Link
                onSelect={(_, e) => {
                    e.preventDefault();
                    helpers.onSelectLinkHandler('/spinning-history', history)
                }}
                href="/spinning-history">Spinning History</Nav.Link>
        </Nav>
                </Col>
            </Row>

</Container>

)

}

export default withRouter(Footer);