import { Carousel, Container, Col, Jumbotron, Button, Row } from 'react-bootstrap';
import style from './Home.module.css';
import imageOne from '../../media/IMG_0192.JPG'
import imageTwo from '../../media/IMG_0206.JPG'
import imageThree from '../../media/IMG_0259.JPG'

const Home = () => {
    return (
        <Container className={style["home-container"]}>
            <Row >
            <Col>
            <Carousel className="w-100">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imageOne}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imageTwo}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imageThree}
                    alt="First slide"
                />
            </Carousel.Item>
    </Carousel>
            </Col>
            <Col>
                <Jumbotron aria-expanded>
                    <h1>Fun Spinning Forever</h1>
                    <h3>Защо Spinning? </h3>
                    <p>Spinning е забавна групова тренировка под звуците на приятна музика и специално осветление! Но не се заблуждавайте, тя може да бъде много изтощителна!</p>
                    <p>
                        <Button variant="primary">Научи повече</Button>
                    </p>
                </Jumbotron>
                </Col>
                </Row>
</Container>
)

}

export default Home;