import React, { Component } from "react";
import DishesServices from "../../../../services/dish.services";
import { Table } from "react-bootstrap";
import DishCard from "./DishCard";
import './DishSearch.scss'

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
        this.setState({ dishes: searchDishes })
      })
      .catch(err => console.log(err));
  };

  componentDidMount = () => { this.getSearchDishes(); }



  render() {
    return (
      <div className="dishSearch">
        <h1>Resultados de la busqueda:</h1>
        <Table>
          <tbody>
            {this.state.dishes.map(dish => (
              <DishCard key={dish._id} {...dish} />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
