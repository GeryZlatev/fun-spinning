import style from './Contacts.module.css';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Locate from '@arcgis/core/widgets/Locate';
import esriConfig from '@arcgis/core/config';
import * as esriService from '../../services/esriService';

const Contacts = () => {

    require([esriConfig, Map, MapView, Locate], function (
        esriConfig,
        Map,
        MapView,
        Locate
    ) {
        
    })
    esriConfig.apiKey = 'AAPK3d4c9784cea04110a40af160cc86de3av_Z884QUbRayao5wQmpLatFwzvLZ7QTlX7T74o7mmvIdK8Yn6q0GNU5zh-rg12mX';

    esriService.getMap()
        .then(res => {
        console.log(res)
    })


    return (
        <div id="viewDiv">

        </div>
    )
}

export default Contacts;