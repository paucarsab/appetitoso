import React, { Component } from 'react'

import DishesServices from '../../../services/dish.services'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import FilesServices from '../../../services/files.services'

class DishForm extends Component {

    constructor(props) {
        super(props)
        this.dishServices = new DishesServices()
        this.filesServices = new FilesServices()
        this.state = {
            dish: {
                title: '',
                description: '',
                length: '',
                inversions: '',
                imageUrl: ''
            }
        }
    }

    finishAction = () => {
        this.props.closeModal()
        this.props.refreshList()
    }

    postDish = () => {
        this.dishServices.postDish(this.state.dish)
            .then(() => this.finishAction())
            .catch(err => console.log(err))
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            dish: { ...this.state.dish, [name]: value }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.postDish()
    }

    handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append("imageUrl", e.target.files[0])
        this.filesServices.handleUpload(uploadData)
            .then(response => {
                console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.secure_url)
                this.setState({
                    dish: { ...this.state.dish, imageUrl: response.secure_url }
                })
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="title" value={this.state.dish.title} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" name="description" value={this.state.dish.description} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Longitud</Form.Label>
                    <Form.Control type="number" name="length" value={this.state.dish.length} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Inversiones</Form.Label>
                    <Form.Control type="number" name="inversions" value={this.state.dish.inversions} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" name="imageUrl" onChange={this.handleFileUpload} />
                    {/* <Form.Control type="text" name="imageUrl" value={this.state.dish.imageUrl} onChange={this.handleChange} /> */}
                </Form.Group>

                <Button variant="dark" type="submit">Crear nueva Montaña</Button>
            </Form>
        )
    }
}

export default DishForm