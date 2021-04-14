import {Container, Row} from 'react-bootstrap';
import style from './Home.module.css';
import imageThree from '../../media/IMG_0271 2.JPG'


const Home = () => {
    return (
        <Container  fluid className={style["home-container"]}>
            <Row fluid="true" >
                <div className={style["image-wrapper"]}>
                    <img
                        src={imageThree}
                        alt="Geri on the spinning bike"
                    />
                </div>
            </Row>
        </Container>
)

}

export default Home;