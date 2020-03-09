import React, { Component } from "react";

import restServices from "../../../../services/rest.services";

import "./rest-details.scss";
import "../../Dish/dishList/DishCard.scss";

import DishCard from "../../Dish/dishList/DishCard";

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
      <Container>
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

            <div>
              <h3>{this.state.rest.address}</h3>
              <h3>Tlf: {this.state.rest.phone}</h3>
              <h3>Web: {this.state.rest.web}</h3>
              <h3>Email: {this.state.rest.email}</h3>
              <h3>Tipo de comida: {this.state.rest.food_type}</h3>
            </div>
            <div className="restMap">
            </div>
            <hr />
            <h2>Descubre los platos de este restaurante:</h2>
            <Table>
              <tbody>
                {this.state.rest.dishes.map(elm => (
                  <DishCard key={elm._id} {...elm} />
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
            console.log("El objecto está vacio")
          )}
      </Container>
    );
  }
}

export default restDetails;
