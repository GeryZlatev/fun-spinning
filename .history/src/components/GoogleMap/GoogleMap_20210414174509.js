import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const GoogleMap = withScriptjs(withGoogleMap((props) => {
    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{lat: }}
        >

        </GoogleMap>
    )
}))