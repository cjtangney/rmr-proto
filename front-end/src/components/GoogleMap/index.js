import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const raggedCoordinates = {
  lat: 43.485429,
  lng: -71.8442777,
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={raggedCoordinates} />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDoZDp2gScD1v-rrl0wOf9Kfb4mhZ59thE'
})(MapContainer);
