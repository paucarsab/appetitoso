import React, { Component } from "react";
import RestServices from "../../../services/rest.services";
import Row from "react-bootstrap/Row";
import RestCard from "./RestCard";
import { Container, Table } from "react-bootstrap";

export default class RestList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rest: [],
      showmodal: false
    };
    this.services = new RestServices();
  }
  componentDidMount = () => this.getAllRest();

  getAllRest = () => {
    this.services
      .getAllRest()
      .then(allRest => this.setState({ rest: allRest }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <h1>Resultados de la busqueda:</h1>
        <Table>
          {this.state.rest.map(rest => (
            <tr><RestCard key={rest._id} {...rest} /></tr>
          ))}
        </Table>
      </Container>
    );
  }
}
