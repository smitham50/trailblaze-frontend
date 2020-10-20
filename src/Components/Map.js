import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

class Map extends Component {

    state = {
        center: {
            lat: parseFloat(this.props.trail.latitude),
            lng: parseFloat(this.props.trail.longitude)
        },
        zoom: 11,
        key: "AIzaSyCv - zuuvPCrmeI3pq2ohidCLBhgnRvW3N0",
        directions: null
    };

    handleDirections = (google) => {
        const origin = { lat: parseFloat(localStorage.latitude), lng: parseFloat(localStorage.longitude) };
        const destination = { lat: this.state.center.lat, lng: this.state.center.lng };

        let directionsService = new google.maps.DirectionsService()
        let directionsDisplay = new google.maps.DirectionsRenderer()
        directionsDisplay.setMap(google.map)

        directionsService.route(
            {
                travelMode: 'DRIVING',
                origin: origin,
                destination: destination
            },
            (DirectionsResult, DirectionsStatus) => {
                console.log('DirectionsResult', DirectionsResult)
                console.log('DirectionsStatus', DirectionsStatus)
                if (DirectionsStatus === 'OK') {
                    directionsDisplay.setDirections(DirectionsResult);
                }
            }
        )
    }
        

    

    render() {
        console.log(this.state.directions)
        return (
            <div style={{ height: '100vh', width: '75%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: this.state.key }}
                    center={ this.state.center }
                    defaultZoom={ this.state.zoom }
                    onGoogleApiLoaded={this.handleDirections}
                    yesIWantToUseGoogleMapApiInternals
                >
                </GoogleMapReact>
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