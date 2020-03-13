import React, { Component } from "react";

import restServices from "../../../../services/rest.services";

import "./rest-details.scss";
import "../../Dish/dishList/DishCard.scss";

import DishCardRest from "../../Dish/dishList/DishCardRest";
import SimpleMap from "../../Map/GoogleMap"

import { Container, Table } from "react-bootstrap";

class restDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { rest: null };
    this.services = new restServices();
  }

  componentDidMount = () => this.getRestDetails();

  getRestDetails = () => {
    this.services
      .getRestDetails(this.props.match.params.id)
      .then(therest => this.setState({ rest: therest }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.rest ? (
          <div className="rest-details">
            <div
              className="rest-slider"
              style={{
                backgroundImage: `url('${this.state.rest.photo}')`
              }}
            >
              <h1>{this.state.rest.name}</h1>
            </div>
            <div className="centralZone">
              <div className="leftCZ">
                <h2>Datos del restaurante: </h2>
                <h3>{this.state.rest.address}</h3>
                <h3>Tlf: {this.state.rest.phone}</h3>
                <h3>Web: {this.state.rest.web}</h3>
                <h3>Email: {this.state.rest.email}</h3>
                <h3>Tipo de comida: {this.state.rest.food_type}</h3>
              </div>
              <div className="restMap">
                <SimpleMap pos={this.state.rest.position}></SimpleMap>
              </div>
            </div>
            <hr />
            <h2>Descubre los platos de este restaurante:</h2>
            <div>
              <Table>
                <tbody className="dishRestDet">
                  {this.state.rest.dishes.map(elm => (
                    <DishCardRest key={elm._id} {...elm} />
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        ) : (
            console.log("")
          )}
      </div>
    );
  }
}

export default restDetails;
