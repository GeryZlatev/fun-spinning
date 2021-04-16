import { loadModules } from 'esri-loader';
import style from './Contacts.module.css';
import config from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Locate from '@arcgis/core/widgets/Locate';
import { useRef } from 'react';

const Contacts = () => {
    const mapRef = useRef();
    loadModules([config, Map, MapView, Locate])
        .then((config, Map, MapView, Locate) => {
            config.apiKey = 'AAPK3d4c9784cea04110a40af160cc86de3av_Z884QUbRayao5wQmpLatFwzvLZ7QTlX7T74o7mmvIdK8Yn6q0GNU5zh-rg12mX';

            const map = new Map({
                basemap: "arcgis-navigation"
            });

            const view = new MapView({
                container: mapRef,
                map: map,
                center: [-40, 28],
                zoom: 2
            });
    })
    return (
        <div className={style["map-view-wrapper"]} ref={mapRef}></div>
    )
}


export default Contacts;