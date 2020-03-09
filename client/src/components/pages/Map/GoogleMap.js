import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import restServices from "../../../services/rest.services";

require("dotenv").config();

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: { lat: null, lng: null },
      zoom: 15
    };
    this.services = new restServices();
  }

  componentDidMount = () => this.getRestDetails();

  getRestDetails = () => {
    this.services
      .getRestDetails(this.props.pos)
      .then(
        this.setState({
          center: this.props.pos
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.props);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "100%" }}>
        {this.state.center.lat ? (
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
            <AnyReactComponent
              lat={Number(this.state.center.lat)}
              lng={Number(this.state.center.lng)}
              text="My Marker"
            />
          </GoogleMapReact>
        ) : (
          console.log("El objecto está vacio")
        )}
      </div>
    );
  }
}

export default SimpleMap;
