import React, { Component } from 'react'

import dishesServices from '../../../services/dish.services'

import './dish-details.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'

class dishDetails extends Component {

    constructor(props) {
        super(props)
        this.state = { dish: {} }
        this.services = new dishesServices()

        console.log('las props por defecto serían estas:', this.props)
    }

    componentDidMount = () => this.getdishDetails()

    getdishDetails = () => {
        this.services.getdishDetails(this.props.match.params.id)
            .then(thedish => this.setState({ dish: thedish }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Container className="dish-details">
                <h1>{this.state.dish.title}</h1>
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <h3>Stats</h3>
                        <hr></hr>
                        <p>Descripción: {this.state.dish.description}</p>
                        <p>Inversiones: {this.state.dish.inversions}</p>
                        <p>Longitud: {this.state.dish.length}</p>
                    </Col>
                    <Col md={{ span: 5, offset: 1 }}>
                        <img src={this.state.dish.imageUrl} alt={this.state.dish.title}></img>
                    </Col>
                </Row>
                <Button as="div" variant="dark" size="sm">
                    <Link to="/">Volver</Link>
                </Button>
            </Container>
        )
    }
}

export default dishDetails