import React, { Component } from 'react'
import GoogleMapReact  from 'google-map-react';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class GoogleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{lat: 12.948842085336729, lng: 80.160182053136623},
              {latitude: 12.948842085336729, longitude: 80.160182053136623}]
    }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }
      
    render() {
        return (
      //       <div style={{ height: '100vh', width: '100%' }}>
      //   <GoogleMapReact
      //     bootstrapURLKeys={{ key: 'AIzaSyCkPgwT8iNcIAt5KTZMqJqvCLbaVMMLVHM' }}
      //     defaultCenter={this.props.center}
      //     defaultZoom={this.props.zoom}
      //   >
      //     <AnyReactComponent
      //       lat={12.948842085336729}
      //       lng={80.160182053136623}
      //       text="My Marker"
      //     />
      //   </GoogleMapReact>
      // </div>
      <div style={{ height: '100vh', width: '100%',    position: 'relative' }}>
      <Map
      google={this.props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: 12.948842085336729, lng: 80.160182053136623}}
    >
       {/* <Marker position={{ lat: 12.948842085336729, lng: 80.160182053136623}} /> */}
       {this.displayMarkers()}
    </Map>
    </div>
        )
    }
}

//export default GoogleMap
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCkPgwT8iNcIAt5KTZMqJqvCLbaVMMLVHM'
})(GoogleMap);

const mapStyles = {
  width: '100%',
  height: '100%',
};