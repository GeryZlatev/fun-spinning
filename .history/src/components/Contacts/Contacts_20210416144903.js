import { loadModules } from 'esri-loader';
import style from './Contacts.module.css';
import config from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Locate from '@arcgis/core/widgets/Locate';

const Contacts = () => {
    loadModules([config, Map, MapView, Locate]).then(() => {
        
    })
    return (
        <div className={style["map-view-wrapper"]}></div>
    )
}


export default Contacts;