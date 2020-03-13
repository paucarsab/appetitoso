import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

import AuthServices from '../../../../services/auth.services'

import '../signup/Signup.scss'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.services = new AuthServices()
    }


    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    postUser = () => {
        this.services.login(this.state)
            .then(theLoggedUser => {
                this.setState({ username: '', password: '' })
                this.props.setTheUser(theLoggedUser)
                this.props.history.push('/')
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
                    <h1>Inicia sesión</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="text" className="inputUp" placeholder="Introduce tu nombre de usuario" name="username" value={this.state.username} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" className="inputUp" placeholder="Introduce tu contraseña" name="password" value={this.state.password} onChange={this.handleChange} />
                        </Form.Group>
                        <Button variant="dark" type="submit">Inicia sesión</Button>
                    </Form>
                    <h3>¿Nuevo en Appetitoso?</h3>
                    <Link to="/signup"><h3 className="redirectLogin">Crear cuenta</h3></Link>
                </div>
            </div>
        )
    }
}

export default Login