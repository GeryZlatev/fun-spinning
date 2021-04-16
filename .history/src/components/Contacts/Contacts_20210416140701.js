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

        esriConfig.apiKey = 'AAPK3d4c9784cea04110a40af160cc86de3av_Z884QUbRayao5wQmpLatFwzvLZ7QTlX7T74o7mmvIdK8Yn6q0GNU5zh-rg12mX';
        
        const map = new Map({
            basemap: "arcgis-navigation"
        });

        const view = new MapView({
            container: "viewDiv",
            map: map,
            center: [-40, 28],
            zoom: 2
        });

                const locate = new Locate({
          view: view,
          useHeadingEnabled: false,
          goToOverride: function(view, options) {
            options.target.scale = 1500;
            return view.goTo(options.target);
          }
        });
        view.ui.add(locate, "top-left");
    })


    // esriService.getMap()
    //     .then(res => {
    //     console.log(res)
    // })


    return (
        <div id="viewDiv">

        </div>
    )
}

export default Contacts;