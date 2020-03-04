import React, { Component } from "react";
import { Link } from "react-router-dom";
import DishesServices from "../../../services/dish.services";
import Row from "react-bootstrap/Row";
import DishCard from "./DishCard";

export default class DishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [],
      showmodal: false
    };
    this.services = new DishesServices();
  }
  componentDidMount = () => this.getAllDishes();

  getAllDishes = () => {
    this.services
      .getAllDishes()
      .then(allDishes => this.setState({ dishes: allDishes }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Row>
          {this.state.dishes.map(elm => (
            <DishCard key={elm._id} {...elm} />
          ))}
        </Row>
      </div>
    );
  }
}
