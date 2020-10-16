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

    // componentDidMount() {
    //     const directionsService = new google.maps.DirectionsService();

    //     const origin = { lat: parseFloat(localStorage.latitude), lng: parseFloat(localStorage.longitude) };
    //     const destination = { lat: this.state.center.lat, lng: this.state.center.lng };

    //     directionsService.route(
    //         {
    //             origin: origin,
    //             destination: destination,
    //             travelMode: google.maps.TravelMode.DRIVING
    //         },
    //         (result, status) => {
    //             if (status === google.maps.DirectionsStatus.OK) {
    //                 this.setState({
    //                     directions: result
    //                 });
    //             } else {
    //                 console.error(`error fetching directions ${result}`);
    //             }
    //         }
    //     );
    // }

    

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '75%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: this.state.key }}
                    center={ this.state.center }
                    defaultZoom={ this.state.zoom }
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