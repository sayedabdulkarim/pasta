import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  // width: '48%',
  // height: '48%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={{width: this.props.width, height: this.props.height}}
        initialCenter={{
         lat: 13.0359,
         lng: 77.6431
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA9jNvUEchRRWNjU775SPeAwZgym3_AS6k'
})(MapContainer);