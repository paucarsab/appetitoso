import React, { Component } from "react";

import dishesServices from "../../../services/dish.services";

import "./dish-details.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

class dishDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { dish: {} };
    this.services = new dishesServices();

    console.log("las props por defecto serían estas:", this.props);
  }

  componentDidMount = () => this.getdishDetails();

  getdishDetails = () => {
    this.services
      .getdishDetails(this.props.match.params.id)
      .then(thedish => this.setState({ dish: thedish }))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.dish.comme);
    return (
      <Container className="dish-details">
        <img src={this.state.dish.photo} alt={this.state.dish.name} />
        <div>
          <h1>{this.state.dish.name}</h1>
          <h3>{this.state.dish.restaurant_id}</h3>
          <h3>{this.state.dish.restaurant_id}</h3>
          <h3>Web:{this.state.dish.restaurant_id}</h3>
          <h3>Tlf:{this.state.dish.restaurant_id}</h3>
          <hr />
          <hr />
          <h2>Ingredientes:</h2>
          <h3>{this.state.dish.ingredients}</h3>
          <h2>Intolerancias:</h2>
          <h3>{this.state.dish.intolerances}</h3>
        </div>
        <div>
          <h2>{this.state.dish.score}</h2>
          {this.state.dish.comments && (
            <h3>{this.state.dish.comments.length}</h3>
          )}
        </div>
      </Container>
    );
  }
}

export default dishDetails;
