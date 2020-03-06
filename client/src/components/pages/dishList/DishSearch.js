import React, { Component } from "react";
import { Link } from "react-router-dom";
import DishesServices from "../../../services/dish.services";
import Row from "react-bootstrap/Row";
import DishCard from "./DishCard";

export default class DishSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [],
      showmodal: false
    };
    this.services = new DishesServices();
  }

  getSearchDishes = () => {
    this.services
      .getSearchDishes(this.props.match.params.dish)
      .then(searchDishes => {
        console.log("Hola k tal?")
        this.setState({ dishes: searchDishes })
        console.log("aki con React")
        console.log(this.state.dishes)
      })
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    console.log("3- didMount")
    this.getSearchDishes();
  }


  render() {
    console.log("2- render")
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
