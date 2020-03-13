import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

import AuthServices from '../../../../services/auth.services'



import './Signup.scss'


class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: ''
        }
        this.services = new AuthServices()
    }


    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    postUser = () => {
        this.services.signup(this.state)
            .then(theLoggedNewUser => {
                this.setState({ username: '', password: '', email: '' })
                this.props.setTheUser(theLoggedNewUser)
            })
            .catch(err => console.log({ err }))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.postUser()
    }


    render() {

        return (
            <div className="signUpGlobal">
                <div className="SignUp">

                    <h1>Registro de usuarios</h1>

                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control className="inputUp" type="text" name="username" value={this.state.username} placeholder="Introduce tu nombre de usuario" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control className="inputUp" type="text" name="email" value={this.state.email} placeholder="Introduce tu email" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control className="inputUp" type="password" name="password" value={this.state.password} placeholder="Escribe tu contraseña" onChange={this.handleChange} />
                        </Form.Group>

                        <Button variant="dark" type="submit">Crear cuenta</Button>
                    </Form>
                    <h3>Al crear la cuenta, aceptas nuestros terminos y condiciones. Por favor, lee nuestra política de privacidad y nuestra política de cookies.</h3>
                    <h3>¿Ya formas parte de Appetitoso?</h3>
                    <Link to="/login"><h3 className="redirectLogin">Inicia sesión</h3></Link>
                </div>
            </div>

        )
    }
}

export default Signup