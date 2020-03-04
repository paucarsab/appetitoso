import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:4000/dishes',
            withCredentials: true
        })
    }

    getAllDishes = () => this.service.get('/all').then(response => response.data)
    getdishDetails = id => this.service.get(`/${id}`).then(response => response.data)
    postdish = dish => this.service.post(`/new`, dish).then(response => response.data)
}