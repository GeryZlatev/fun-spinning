import { loadModules } from 'esri-loader';
import style from './Contacts.module.css';
import config from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Locate from '@arcgis/core/widgets/Locate';
import { useRef } from 'react';

const Contacts = () => {
    const mapRef = useRef();
    loadModules([config, Map, MapView, Locate]).then(() => {

    })
    return (
        <div className={style["map-view-wrapper"]} ref={mapRef}></div>
    )
}


export default Contacts;