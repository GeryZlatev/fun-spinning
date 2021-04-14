import { Badges } from 'react-bootstrap';
import style from 'Header.module.css';

const Header = (props) => {
    return (
        <div className={style["header-wrapper"]}>
            <h1>
                Explore The World of <Badges variant="secondary">Spinningg</Badges>
            </h1>
            <h3></h3>

        </div>
    )
}