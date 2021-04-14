import {Container, Row, Image } from 'react-bootstrap';
import style from './Home.module.css';
import imageThree from '../../media/IMG_0271 2.JPG'


const Home = () => {
    return (
        <Container  fluid className={style["home-container"]}>
            <Row fluid="true" >
                <Image
                    src={imageThree}
                    fluid
                />
            </Row>
        </Container>
)

}

export default Home;