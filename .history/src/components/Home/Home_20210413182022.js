import { Carousel } from 'react-bootstrap';

import imageOne from '../../media/IMG_0192.jpg'
import imageTwo from '../../media/IMG_0206.jpg'
import imageThree from '../../media/IMG_0259.jpg'

const Home = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imageOne}
                    alt="First slice"
                />
            </Carousel.Item>
    </Carousel>
)

}

export default Home;