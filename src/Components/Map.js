import React, { PureComponent } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import axios from 'axios';

class Map extends PureComponent {

    state = {
        center: {
            lat: parseFloat(this.props.trail.latitude),
            lng: parseFloat(this.props.trail.longitude)
        },
        zoom: 11,
        key: "",
        directions: null
    };

    async componentDidMount() {
        const resp = await axios('https://nameless-wave-57808.herokuapp.com/api/v1/map_auth');

        this.setState({
            key: resp.data.key.replace(/\s/g, "")
        });
    };

    handleDirections = (google) => {
        const origin = { lat: parseFloat(localStorage.latitude), lng: parseFloat(localStorage.longitude) };
        const destination = { lat: this.state.center.lat, lng: this.state.center.lng };

        let directionsService = new google.maps.DirectionsService();
        let directionsDisplay = new google.maps.DirectionsRenderer();
        directionsDisplay.setMap(google.map);

        directionsService.route(
            {
                travelMode: 'DRIVING',
                origin: origin,
                destination: destination
            },
            (DirectionsResult, DirectionsStatus) => {
                if (DirectionsStatus === 'OK') {
                    directionsDisplay.setDirections(DirectionsResult);
                }
            }
        )
    };

    render() {

        const { 
            key, 
            center,
            zoom
        } = this.state;

        return (
            <div className="map" >
                {
                    key
                    ?
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: key }}
                        center={ center }
                        defaultZoom={ zoom }
                        onGoogleApiLoaded={this.handleDirections}
                        yesIWantToUseGoogleMapApiInternals
                    >
                    </GoogleMapReact>
                    :
                    null
                }
            </div>
        );
    };
};

function msp(state) {
    const {
        trail
    } = state.trailShow;

    return {
        trail
    };
};

export default connect(msp, null)(Map);