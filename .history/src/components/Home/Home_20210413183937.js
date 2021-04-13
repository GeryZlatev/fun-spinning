import { Carousel, Container, Col } from 'react-bootstrap';

import imageOne from '../../media/IMG_0192.JPG'
import imageTwo from '../../media/IMG_0206.JPG'
import imageThree from '../../media/IMG_0259.JPG'

const Home = () => {
    return (
        <Container>
            <Col>
            <Carousel className="w-50">
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
</Container>
)

}

export default Home;