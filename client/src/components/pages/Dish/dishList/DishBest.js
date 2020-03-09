import React, { Component } from "react";
import DishesServices from "../../../../services/dish.services";
import Row from "react-bootstrap/Row";
import DishCardHome from "./DishCardHome";
import "./DishBest.scss";

export default class DishBest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [],
      showmodal: false
    };
    this.services = new DishesServices();
  }
  componentDidMount = () => this.getBestDishes();

  getBestDishes = () => {
    this.services
      .getBestDishes()
      .then(allDishes => this.setState({ dishes: allDishes }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Row className="bestDishes">
          {this.state.dishes.map(elm => (
            <DishCardHome key={elm._id} {...elm} />
          ))}
        </Row>
      </div>
    );
  }
}
