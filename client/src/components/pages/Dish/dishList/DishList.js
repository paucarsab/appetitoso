import React, { Component } from "react";
import DishesServices from "../../../../services/dish.services";
import DishCard from "./DishCard";
import { Container, Table } from "react-bootstrap";

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
      <Container>
        <h1>Resultados de la busqueda:</h1>
        <Table>
          {this.state.dishes.map(dish => (
            <tr>
              <DishCard key={dish._id} {...dish} />
            </tr>
          ))}
        </Table>
      </Container>
    );
  }
}
