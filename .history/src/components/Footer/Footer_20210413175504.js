import { Nav } from 'react-bootstrap';

const Footer = () => {
    return (

        <>
            <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/support">Support</Nav.Link>
            <Nav.Link href="/contacts">Contacts</Nav.Link>
            <Nav.Link href="/account">Access Your Account</Nav.Link>
        </Nav>

        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/about-spinning">About Spinning</Nav.Link>
            <Nav.Link href="/spinning-history">Spinning History</Nav.Link>
        </Nav>
</>
    //     <Container fixed="bottom">
    //     <Row>
    //         <Col>
    //             <Row>Support</Row>
    //             <Row>Contacts</Row>
    //             <Row>Access Your Account</Row>
    //         </Col>
    //         <Col>
    //             <Row>About Us</Row>
    //             <Row>About Spinning</Row>
    //             <Row>Spinning History</Row>
    //         </Col>
    //     </Row>
    // </Container>
)

}

export default Footer;