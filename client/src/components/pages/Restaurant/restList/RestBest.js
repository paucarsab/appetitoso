import React, { Component } from "react";
import RestServices from "../../../services/rest.services";
import Row from "react-bootstrap/Row";
import RestCardHome from "./RestCardHome";
import "./RestBest.scss";

export default class DishBest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      showmodal: false
    };
    this.services = new RestServices();
  }
  componentDidMount = () => this.getBestRest();

  getBestRest = () => {
    this.services
      .getBestRest()
      .then(allRest => this.setState({ restaurants: allRest }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Row className="bestRest">
          {this.state.restaurants.map(elm => (
            <RestCardHome key={elm._id} {...elm} />
          ))}
        </Row>
      </div>
    );
  }
}
