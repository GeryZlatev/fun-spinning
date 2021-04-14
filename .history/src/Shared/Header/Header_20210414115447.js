import { Badge } from 'react-bootstrap';
import style from 'Header.module.css';

const Header = (props) => {
    return (
        <div className={style["header-wrapper"]}>
            <h1>
                Explore The World of <Badge variant="secondary">Spinningg</Badge>
            </h1>
            <h3>Never stop growing. Whether you’re new to Spinning or not, we invite you to continue your fitness journey here.</h3>
        </div>
    )
}

export default Header;