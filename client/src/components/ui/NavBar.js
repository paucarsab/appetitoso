import React, { Component } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./NavBar.scss"

import AuthServices from "../../services/auth.services";

import { Link } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.services = new AuthServices();
  }

  logout = () => {
    this.services
      .logout()
      .then(response => {
        this.props.setTheUser(false);
      })
      .catch(err => console.log(err));
  };

  render() {
    const greeting = this.props.loggedInUser ? (
      <>Bienvenid@, {this.props.loggedInUser.username}</>
    ) : (
        <>Hola, invitad@</>
      );

    return this.props.loggedInUser ? (
      <Navbar className="navbar navbar-default navbar-fixed-top" expand="lg" variant="dark">
        <Navbar.Brand href="/">
          <img
            src="../../../Appetitoso_logo_white.svg"
            alt="appetitoso-logo-pink"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse >
          <Nav className="ml-auto">
            <Nav.Link as="div">
              <Link to={`/profile/${this.props.loggedInUser._id}`}>{greeting}</Link>
            </Nav.Link>
            <Nav.Link as="div"> </Nav.Link>
            <Nav.Link onClick={this.logout}>Cerrar sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    ) : (
        <Navbar className="navbar" expand="lg" variant="dark">
          <Navbar.Brand href="/">
            <img
              src="../../../Appetitoso_logo_white.svg"
              alt="appetitoso-logo-pink"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as="div"> </Nav.Link>
              <Nav.Link as="div">
                {" "}
                <Link to="/signup">Registro</Link>
              </Nav.Link>
              <Nav.Link as="div">
                {" "}
                <Link to="/login" className="prueba">Inicio sesión</Link>
              </Nav.Link>
              {/* <Nav.Link as="small">{greeting}</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
  }
}

export default Navigation;
