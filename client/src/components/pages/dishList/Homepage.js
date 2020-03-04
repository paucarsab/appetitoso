import React, { Component } from "react";
import DishesServices from "../../../services/dish.services";
import DishForm from "../dishForm/DishForm";
import "./Homepage.scss";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <Container className="homepage">
        <div className="search-zone">
          <div>
            <h2>Busca entre millones de platos</h2>
            <h3>Busca el lugar, encuentra tu plato</h3>
            <div className="searchBar">
              <input type="text" placeholder="Ej. Spaghetti" />
              <Link to="/dishes/all">
                <button>Buscar</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="maxScore">
          <h2>Los platos mejor valorados</h2>
        </div>
        <div className="restSignUp">
          <h3>¿Tu restaurante tiene el mejor plato de la ciudad?</h3>
          <h3>Compártelo y recibe más clientes</h3>
          <button>Dar de alta</button>
        </div>
        <footer>
          <div>
            <h4>Appetitoso S.L.</h4>
            <h5>
              Paseo de la Chopera, 14 Edif. Ironhack | Casa del Lector 28045
              Madrid
            </h5>
          </div>
          <div>Copyright© Appetitoso 2020</div>
        </footer>
        {/* {this.props.loggedInUser && <Button className="mb-20" variant="dark" onClick={this.openModal}>Crear Montaña rusa</Button>}

                {this.state.dishes.length ? (
                    <Row>
                        {this.state.dishes.map(elm => <DishCard key={elm._id} {...elm} />)}
                    </Row>
                )
                    :
                    <p>CARGANDO...</p>

                }






                <Modal show={this.state.showmodal} onHide={this.closeModal}>
                    <Modal.Body>
                        <h3>Listado platos</h3>
                        <hr></hr>
                        <DishForm closeModal={this.closeModal} refreshList={this.getAllDishes} />
                    </Modal.Body>
                </Modal> */}
      </Container>
    );
  }
}

export default Homepage;
