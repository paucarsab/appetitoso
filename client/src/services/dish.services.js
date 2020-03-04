import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:4000/api/dishs',
            withCredentials: true
        })
    }

    getAlldishs = () => this.service.get('/getAlldishs').then(response => response.data)
    getdishDetails = id => this.service.get(`/getOnedish/${id}`).then(response => response.data)
    postdish = dish => this.service.post(`/new`, dish).then(response => response.data)
}