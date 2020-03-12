import React, { Component } from "react";
import "./Homepage.scss";
import Container from "react-bootstrap/Container";
import SearchBar from "../../ui/SearchBar";
import DishBest from "../Dish/dishList/DishBest"
import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <Container className="homepage">
        <div className="search-zone">
          <div>
            <h2>Busca entre millones de platos</h2>
            <h3>Busca el lugar, encuentra tu plato</h3>
            <SearchBar></SearchBar>
          </div>
        </div>
        <div className="maxScore">
          <h2>Los platos mejor valorados</h2>
          <DishBest></DishBest>
        </div>
        <div className="restSignUp">
          <h3>¿Tu restaurante tiene el mejor plato de la ciudad?</h3>
          <h3>Compártelo y recibe más clientes</h3>
          <Link to="/rest/new">
            <button>Dar de alta</button>
          </Link>
        </div>
        <footer>
          <div>
            <h4>Appetitoso S.L.</h4>
            <h5>
              Paseo de la Chopera, 14 Edif. Ironhack | Casa del Lector 28045
              Madrid
            </h5>
          </div>
          <h5>Copyright © - Appetitoso 2020</h5>
        </footer>
      </Container>
    );
  }
}

export default Homepage;
