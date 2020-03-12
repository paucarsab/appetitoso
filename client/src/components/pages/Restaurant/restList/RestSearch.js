import React, { Component } from "react";
import RestServices from "../../../services/rest.services";
import { Container, Table } from "react-bootstrap";
import RestCard from "./RestCard";

export default class RestSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rest: [],
      showmodal: false
    };
    this.services = new RestServices();
  }

  getSearchRest = () => {
    this.services
      .getSearchRest(this.props.match.params.rest)
      .then(searchRest => {
        this.setState({ rest: searchRest })
      })
      .catch(err => console.log(err));
  };

  componentDidMount = () => { this.getSearchRest(); }


  render() {
    return (
      <Container>
        <h2>Resultados de la busqueda:</h2>
        <Table>
          <tbody>
            {this.state.rest.map(rest => {
              console.log(rest)
              return <RestCard key={rest._id} {...rest} />
            }
            )}
          </tbody>
        </Table>
      </Container>
    );
  }
}
