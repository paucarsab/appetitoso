import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";

import './RestSignUp.scss'

import RestServices from '../../../../services/rest.services'


class RestSignup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            email: '',
            address: '',
            phone: '',
            web: '',
            food_type: '',
            position: '',
            photo: ''
        }
        this.services = new RestServices()
    }


    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    postRest = () => {
        this.services.postRest(this.state)
            .then(theLoggedNewUser => {
                this.setState({
                    name: '',
                    password: '',
                    email: '',
                    address: '',
                    phone: '',
                    web: '',
                    food_type: '',
                    position: '',
                    photo: ''
                })
                this.props.setTheUser(theLoggedNewUser)
            })
            .catch(err => console.log({ err }))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.postRest()
    }


    render() {

        return (

            <Container className="backFormRest">
                <Form onSubmit={this.handleSubmit} className="form-rest">
                    <h1>Registra tu restaurante</h1>
                    <Form.Row>
                        <Form.Group as={Col} md="4" >
                            <Form.Label>Nombre del restaurante</Form.Label>
                            <Form.Control type="text" name="name" value={this.state.username} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} md="20" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} md="4" >
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control type="text" name="address" value={this.state.address} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Web</Form.Label>
                            <Form.Control type="text" name="web" value={this.state.web} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <h3>Selecciona el tipo de comida: </h3>
                        {['radio'].map(type => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check inline label="Española" type={type} value={this.state.food_type} id={`inline-${type}-1`} />
                                <Form.Check inline label="Italiana" type={type} value={this.state.food_type} id={`inline-${type}-2`} />
                                <Form.Check inline label="Mexicana" type={type} value={this.state.food_type} id={`inline-${type}-3`} />
                                <Form.Check inline label="Americana" type={type} value={this.state.food_type} id={`inline-${type}-4`} />
                                <Form.Check inline label="Japonesa" type={type} value={this.state.food_type} id={`inline-${type}-5`} />
                                <Form.Check inline label="China" type={type} value={this.state.food_type} id={`inline-${type}-6`} />
                                <Form.Check inline label="Turca" type={type} value={this.state.food_type} id={`inline-${type}-7`} />
                                <Form.Check inline label="Centroamericana" value={this.state.food_type} type={type} id={`inline-${type}-8`} />
                                <Form.Check inline label="Sudamericana" value={this.state.food_type} type={type} id={`inline-${type}-9`} />
                                <Form.Check inline label="Centroeuropea" value={this.state.food_type} type={type} id={`inline-${type}-10`} />
                            </div>
                        ))}
                    </Form.Group>

                    <Button variant="dark" type="submit">Dar de alta</Button>
                </Form>
            </Container>

        )
    }
}

export default RestSignup