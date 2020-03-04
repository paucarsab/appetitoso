import React, { Component } from "react";

import DishsServices from "../../../services/dish.services";

import DishForm from "../dishForm/DishForm";
import DishCard from "./DishCard";
import "./Homepage.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishs: [],
      showmodal: false
    };
    this.services = new DishsServices();
  }

  // componentDidMount = () => this.getAllDishs()

  // getAllDishs = () => {
  //     this.services.getAllDishs()
  //         .then(allDishs => this.setState({ dishs: allDishs }))
  //         .catch(err => console.log(err))
  // }

  // closeModal = () => this.setState({ showmodal: false })
  // openModal = () => this.setState({ showmodal: true })

  render() {
    return (
      <Container className="homepage">
        <div className="search-zone">
          <div>
            <h2>Busca entre millones de platos</h2>
            <h3>Busca el lugar, encuentra tu plato</h3>
            <div className="searchBar">
              <input type="text" placeholder="Ej. Spaghetti" />
              <button>Buscar</button>
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

                {this.state.dishs.length ? (
                    <Row>
                        {this.state.dishs.map(elm => <DishCard key={elm._id} {...elm} />)}
                    </Row>
                )
                    :
                    <p>CARGANDO...</p>

                }






                <Modal show={this.state.showmodal} onHide={this.closeModal}>
                    <Modal.Body>
                        <h3>Listado platos</h3>
                        <hr></hr>
                        <DishForm closeModal={this.closeModal} refreshList={this.getAllDishs} />
                    </Modal.Body>
                </Modal> */}
      </Container>
    );
  }
}

export default Homepage;
