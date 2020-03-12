import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/dishes`,
            withCredentials: true
        })
    }

    getAllDishes = () => this.service.get('/all').then(response => response.data)
    getdishDetails = id => this.service.get(`/${id}`).then(response => response.data)
    postdish = dish => this.service.post(`/new`, dish).then(response => response.data)
    getSearchDishes = dish => this.service.get(`/search/${dish}`)
        .then(response => response.data)
        .catch(error => console.log(error))
    getBestDishes = () => this.service.get('/score').then(response => response.data)
}