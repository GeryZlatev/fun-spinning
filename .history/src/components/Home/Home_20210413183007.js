import { Carousel } from 'react-bootstrap';

import imageOne from '../../media/IMG_0192.JPG'
import imageTwo from '../../media/IMG_0206.JPG'
import imageThree from '../../media/IMG_0259.JPG'

const Home = () => {
    return (
        <Carousel className="w-50">
            <Carousel.Item>
                <img
                    className="d-block w-50"
                    src={imageOne}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-50"
                    src={imageTwo}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-50"
                    src={imageThree}
                    alt="First slide"
                />
            </Carousel.Item>
    </Carousel>
)

}

export default Home;