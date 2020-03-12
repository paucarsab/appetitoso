import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/rest`,
            withCredentials: true
        })
    }

    getAllRest = () => this.service.get('/all').then(response => response.data)
    getRestDetails = id => this.service.get(`/${id}`).then(response => response.data)
    postRest = ({ name, password, email, address, phone, web}) => this.service.post('/new', { name, password, email, address, phone, web }).then(response => response.data)
    getSearchRest = rest => this.service.get(`/search/${rest}`)
        .then(response => { return response.data })
        .catch(error => console.log(error))
    getBestRest = () => this.service.get('/score').then(response => response.data)
}