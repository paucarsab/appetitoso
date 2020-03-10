import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/edit`,
            withCredentials: true   // RUTAS PERSISTENTES
        })
    }

    getNewFavDish = (id, newFavDish) => this.service.put(`/fav/${id}`, newFavDish).then(response => response.data)
}




